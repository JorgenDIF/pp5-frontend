import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

const feelingEmojis = {
  happy: "😊",
  sad: "😢",
  angry: "😠",
  excited: "😄",
  bored: "😒",
  confused: "😕",
};

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const [feeling, setFeeling] = useState(""); // Initialize as an empty string to ensure user selection

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleChangeFeeling = (event) => {
    setFeeling(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!feeling) {
      // Check if a feeling is selected
      alert("Please choose a feeling before submitting!");
      return;
    }
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
        feeling,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
      setFeeling(""); // Reset feeling after submission
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChangeContent}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label>Feeling {feeling && feelingEmojis[feeling]}</Form.Label>{" "}
        {/* Show emoji next to label */}
        <Form.Control
          as="select"
          value={feeling}
          onChange={handleChangeFeeling}
          required 
        >
          <option value="">Choose a feeling...</option>
          <option value="happy">Happy 😊</option>
          <option value="sad">Sad 😢</option>
          <option value="angry">Angry 😡</option>
          <option value="excited">Excited 😄</option>
          <option value="bored">Bored 😒</option>
          <option value="confused">Confused 😕</option>
        </Form.Control>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        Post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
