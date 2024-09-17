/*
 * This form is used for editing an existing post. It allows the user to
 * update the post's title, content, image, mood, and category.
 *
 * Currently, the mood and category options are imported from static data files
 * (`mood.js` and `category.js`). This approach serves as a temporary solution
 * to avoid hardcoding values directly in the component. The long-term plan
 * is to fetch these options dynamically from the backend for greater flexibility
 * and scalability.
 */

import React, { useEffect, useRef, useState } from "react";
import { moods } from "../../data/mood"; // Static mood data as a temporary solution
import { categories } from "../../data/category"; // Static category data as a temporary solution
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
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults"; // Axios instance for API requests

function PostEditForm() {
  const [errors, setErrors] = useState({});

  /*
   * State to manage the form data, including title, content, image, mood, and category.
   * Mood and category default to the first options in their respective arrays.
   */
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    mood: moods[0].value, // Default to the first mood option
    category: categories[0].value, // Default to the first category option
  });
  const { title, content, image, mood, category } = postData;

  const imageInput = useRef(null); // Ref for handling image file input
  const history = useHistory();
  const { id } = useParams(); // Fetch the post ID from the URL parameters

  /*
   * Fetch post details when the component is mounted.
   * If the user is not the owner of the post, they are redirected to the home page.
   */
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const { title, content, image, is_owner, mood, category } = data;

        if (is_owner) {
          setPostData({
            title,
            content,
            image,
            mood,
            category,
          });
        } else {
          history.push("/");
        }
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  // Updates the state with the input values as the user types in the form
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles image selection and updates the state with the selected image
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
   * Submits the form data to update the post.
   * If the user changes the image, it is included in the submission.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("mood", mood);
    formData.append("category", category);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/posts/${id}/`, formData);
      history.push(`/posts/${id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

    /*
   * Render the form fields, including inputs for title, content, mood, and category.
   * The mood and category dropdowns are currently populated with static data, but
   * will be refactored to fetch these options dynamically from the backend in the future.
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
        >
          {moods.map((moodOption) => (
            <option key={moodOption.value} value={moodOption.value}>
              {moodOption.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.mood?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* Category Dropdown */}
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={category}
          onChange={handleChange}
        >
          {categories.map((categoryOption) => (
            <option key={categoryOption.value} value={categoryOption.value}>
              {categoryOption.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
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

export default PostEditForm;
