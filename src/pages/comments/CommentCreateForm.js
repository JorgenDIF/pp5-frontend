/*
 * This form is used to create a new comment on a post. Users can enter a comment,
 * select their current feeling, and submit the form. The feeling options are imported
 * from a static file (`feeling.js`) and are used to let users express their emotions 
 * when commenting.
 *
 * Similar to the approach in the post creation form, this solution avoids hardcoding
 * the feeling options directly in the component, instead sourcing them from a static file.
 * In the future, the plan is to make this more dynamic by fetching feelings from the backend.
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { feelings } from "../../data/feeling";  // Importing feeling options from a static file
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const [feeling, setFeeling] = useState(""); 
  const [feelingError, setFeelingError] = useState(""); 

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleChangeFeeling = (event) => {
    setFeeling(event.target.value);
    setFeelingError("");
  };

    /*
   * Handles form submission to create a new comment.
   * Ensures that a feeling is selected before submitting and updates the state accordingly.
   * The post and comments are dynamically updated to reflect the new comment.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate if a feeling has been chosen
    if (!feeling) {
      setFeelingError("Please choose a feeling before submitting!");
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
      setFeeling(""); 
    } catch (err) {
      // console.log(err);
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

      {/* Feeling Dropdown */}
      <Form.Group>
        <Form.Label>Feeling</Form.Label>
        <Form.Control
          as="select"
          value={feeling}
          onChange={handleChangeFeeling}
          isInvalid={!!feelingError} // Mark as invalid if error exists
        >
          <option value="">--Select Feeling--</option> {/* Empty option */}
          {feelings.map((feelingOption) => (
            <option key={feelingOption.value} value={feelingOption.value}>
              {feelingOption.label}
            </option>
          ))}
        </Form.Control>
        {feelingError && <div className="text-danger mt-1">{feelingError}</div>} {/* Error message */}
      </Form.Group>

      <button
        className={`${styles.Button} btn d-block ms-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        Post
      </button>
    </Form>
  );
}

export default CommentCreateForm;