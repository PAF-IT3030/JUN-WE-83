import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import axios from "axios";
import Swal from "sweetalert2";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";

function Updatepost() {
  const { id } = useParams();
  const handleBack = () => navigate(-1);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    postDescription: "",
    images: [],
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.images.length < 4) {
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
      setImageUploadError("You can only upload 3 image");
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

  useEffect(() => {
    async function fetchdata() {
      try {
        const result = await axios.get(
          `http://localhost:8087/api/v1/post/getpost/${id}`
        );
        const postData = result.data;

        setFormData({
          postDescription: postData.postDescription || "",
          images: postData.images || [],
        });

        console.log(postData);
      } catch (error) {
        console.log("error fetching", error);
      }
    }
    fetchdata();
  }, [id]);

  const handleChange = (e) => {
    {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const updatePost = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.postDescription.trim() || formData.images.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill all required fields and upload at least one image.",
      });
      return;
    }

    // Show confirmation message before updating
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the post details?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });

    if (confirmResult.isConfirmed) {
      try {
        const result = await axios.put(
          `http://localhost:8087/api/v1/post/edit/${id}`,
          formData
        );

        // Check if the update was successful
        if (result.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "post details updated successfully",
          });
          navigate("/");
        } else {
          // Handle the case where the update failed
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to update post details",
          });
        }
      } catch (error) {
        // Handle any errors that occur during the update process
        console.error("Error updating workout:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while updating post details",
        });
      }
    }
  };

  return (
    <div className="AddPost">
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}
        >
          Update Post
        </h1>
      </section>
      <form>
        <div className="form-section">
          <div className="in-sec">
            <input
              type="text"
              placeholder="Post Description"
              id="postDescription"
              required
              onChange={handleChange}
              value={formData.postDescription}
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
            <button onClick={updatePost}>Update Post</button>
          </div>
          {error && <p className="err-msg">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Updatepost;
