import React, { useState } from "react";
import { feelings } from "../../data/feeling";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import styles from "../../styles/CommentCreateEditForm.module.css";
import { Link } from "react-router-dom";

function CommentEditForm(props) {
  const { id, content, feeling, setShowEditForm, setComments, profile_id, profileImage } = props;

  const [formContent, setFormContent] = useState(content);
  const [formFeeling, setFormFeeling] = useState(feeling);

  const handleContentChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleFeelingChange = (event) => {
    setFormFeeling(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
        feeling: formFeeling,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                feeling: formFeeling,
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      //console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="d-flex align-items-center">
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profileImage} />
        </Link>
        <Form.Control
          className={`${styles.Form} ml-2`}
          as="textarea"
          value={formContent}
          onChange={handleContentChange}
          rows={2}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Feeling</Form.Label>
        <Form.Control
          as="select"
          value={formFeeling}
          onChange={handleFeelingChange}
        >
          {feelings.map((feelingOption) => (
            <option key={feelingOption.value} value={feelingOption.value}>
              {feelingOption.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          Cancel
        </button>
        <button
          className={styles.Button}
          disabled={!formContent.trim()}
          type="submit"
        >
          Save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;