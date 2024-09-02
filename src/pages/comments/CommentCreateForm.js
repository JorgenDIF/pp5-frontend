import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const [feeling, setFeeling] = useState(""); // New state for feeling

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleChangeFeeling = (event) => {
    setFeeling(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
        feeling, // Include feeling in the data sent to API
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
        <Form.Label>Feeling</Form.Label>
        <Form.Control
          as="select"
          value={feeling}
          onChange={handleChangeFeeling}
        >
          <option value="">Choose a feeling...</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="angry">Angry</option>
          <option value="excited">Excited</option>
          <option value="bored">Bored</option>
          <option value="confused">Confused</option>
        </Form.Control>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CommentCreateForm;