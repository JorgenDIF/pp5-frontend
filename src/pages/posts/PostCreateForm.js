/*
 * This form is used to create a new post. It allows users to enter a title,
 * content, image, and select a mood and category. Currently, the mood and category
 * options are imported from static files (`mood.js` and `category.js`), which
 * provide predefined choices.
 *
 * Although this solution avoids hardcoding these options directly in the component,
 * it is a compromise. The long-term plan is to refactor the application to make
 * these fields dynamic by fetching mood and category options from the backend
 * to ensure better flexibility and scalability.
 */

import React, { useRef, useState } from "react";
import { moods } from "../../data/mood"; // Importing mood options from a static data file
import { categories } from "../../data/category"; // Importing category options from a static data file

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function PostCreateForm() {
  const [errors, setErrors] = useState({});
  const [moodError, setMoodError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  // Initial post data state
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    mood: "",
    category: "",
  });
  const { title, content, image, mood, category } = postData;

  const imageInput = useRef(null); // For handling image file input
  const history = useHistory(); // To navigate programmatically

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
    setMoodError(""); // Clear mood error when the user selects a mood
    setCategoryError(""); // Clear category error when the user selects a category
  };

  // Updates the image in the state when a file is selected
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  /*
   * Handles form submission. If the user hasn't selected a mood or category,
   * it displays an error. Otherwise, the form data is submitted to the backend.
   * Once the post is successfully created, the user is redirected to the post page.
   */

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure a mood and category are selected before submitting
    if (!mood) {
      setMoodError("Please choose a mood before submitting!");
      return;
    }

    if (!category) {
      setCategoryError("Please choose a category before submitting!");
      return;
    }

    const formData = new FormData(); // Prepare form data for submission
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);
    formData.append("mood", mood);
    formData.append("category", category);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`); // Redirect to the created post page
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  /*
   * Renders the form with inputs for title, content, mood, category, and image.
   * The mood and category dropdowns are currently populated with static data,
   * but will be refactored to fetch these options from the backend in the future.
   */
  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* Mood Dropdown */}
      <Form.Group>
        <Form.Label>Mood</Form.Label>
        <Form.Control
          as="select"
          name="mood"
          value={mood}
          onChange={handleChange}
          isInvalid={!!moodError}
        >
          <option value="">--Choose Mood--</option> {/* Default empty option */}
          {moods.map((moodOption) => (
            <option key={moodOption.value} value={moodOption.value}>
              {moodOption.label}
            </option>
          ))}
        </Form.Control>
        {moodError && <div className="text-danger mt-1">{moodError}</div>}
      </Form.Group>

      {/* Category Dropdown */}
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={category}
          onChange={handleChange}
          isInvalid={!!categoryError}
        >
          <option value="">--Choose Category--</option>{" "}
          {/* Default empty option */}
          {categories.map((categoryOption) => (
            <option key={categoryOption.value} value={categoryOption.value}>
              {categoryOption.label}
            </option>
          ))}
        </Form.Control>
        {categoryError && (
          <div className="text-danger mt-1">{categoryError}</div>
        )}
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}
              <Form.Group controlId="image-upload">
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleChangeImage}
                  ref={imageInput}
                />
              </Form.Group>
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
