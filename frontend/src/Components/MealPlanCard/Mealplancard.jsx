import React, { useState } from "react";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function MealplanCard() {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ////
  };

  return (
    <div className="MealSharing">
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}>
          Meal Sharing
        </h1>
      </section>
      <div className="formSection">
        <Form className="form-sec" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control type="text" name="ingredients" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cooking Instructions</Form.Label>
            <Form.Control type="text" name="instructions" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name="description" rows={4} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Button variant="primary" type="submit">SHARE MEAL</Button>
        </Form>
      </div>
    </div>
  );
}

export default MealplanCard;
