import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";

function Sharemealplan() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    ingredients: "",
    cookingInstructions: "",
    images: [],
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.images.length < 2) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            images: formData.images.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2 mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 1 image");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index, e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (
      !formData.ingredients ||
      !formData.cookingInstructions ||
      formData.images.length === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields!",
      });
      return;
    }

    try {
      if (formData.images.length < 1)
        return setError("You must upload at least one image");
      setLoading(true);
      setError(false);
      const response = await axios.post(
        "http://localhost:8087/api/v1/meal/save",
        {
          ...formData,
        }
      );
      const data = response.data;
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      Swal.fire("Success!", "Your Meal Plan has been added.", "success").then(
        () => {
          navigate("/");
        }
      );
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="AddPost">
      <div className="topi">
        <h2>Create Meal Plan</h2>
      </div>
      <form>
        <div className="form-section">
          <div className="in-sec">
            <input
              type="text"
              placeholder="Ingredients"
              id="ingredients"
              required
              onChange={handleChange}
              value={formData.ingredients}
            />
          </div>
          <div className="in-sec">
            <input
              type="text"
              placeholder="Cooking Instructions"
              id="cookingInstructions"
              required
              onChange={handleChange}
              value={formData.cookingInstructions}
            />
          </div>
          <div className="img-upld">
            <div className="file-sec">
              <input
                type="file"
                required
                onChange={(e) => setFiles(e.target.files)}
                id="images"
                accept="image/*"
              />
            </div>
            <div className="upld-btn">
              <button
                type="button"
                disabled={uploading}
                onClick={handleImageSubmit}
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>

          <p className="err-msg">{imageUploadError && imageUploadError}</p>
          {formData.images.map((imageUrl, index) => (
            <div className="img-view" key={index}>
              <div className="img-p">
                <img src={imageUrl} alt="" />
              </div>
              <div className="dlt-btn">
                <button
                  type="button"
                  onClick={(e) => handleRemoveImage(index, e)}
                >
                  delete
                </button>
              </div>
            </div>
          ))}

          <div className="upd-btnn">
            <button onClick={handleSubmit}>Share Meal Plan</button>
          </div>
          {error && <p className="err-msg">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Sharemealplan;
