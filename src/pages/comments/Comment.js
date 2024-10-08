/*
 * This component represents an individual comment within a post.
 * It includes details such as the comment owner, profile image, timestamp,
 * content, and a "feeling" associated with the comment. It also allows for 
 * editing and deleting if the current user is the owner of the comment.
 */
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import CommentEditForm from "./CommentEditForm";

import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

import { feelings } from "../../data/feeling"; // Import the list of predefined feelings

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    feeling,// The "feeling" associated with the comment
    id,
    setPost,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
      //console.log(err);
    }
  };

    /*
   * Fetch the label (user-friendly name) for the 'feeling' field.
   * This is a temporary solution using a static list of feelings.
   * In the future, this could be refactored to be dynamic by integrating
   * feelings from the backend, allowing for more flexibility.
   */
  const getFeelingLabel = (feeling) => {
    const foundFeeling = feelings.find((item) => item.value === feeling);
    return foundFeeling ? foundFeeling.label : feeling;
  };

  /*
 * Render the comment component, showing the comment's content, 
 * the associated feeling (which is mandatory), and options for editing/deleting 
 * if the current user is the comment owner.
 * The "feeling" associated with each comment must be selected by the user before submission.
 */
  return (
    <div>
      <hr />
      <Row>
        <Col xs="auto">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} />
          </Link>
        </Col>
        <Col className="align-self-center">
          <div className="d-flex flex-column">
            <div>
              <span className={styles.Owner}>{owner}</span>
              <span className={styles.Date}>{updated_at}</span>
            </div>
            {showEditForm ? (
              <CommentEditForm
                id={id}
                content={content}
                feeling={feeling}
                setComments={setComments}
                setShowEditForm={setShowEditForm}
                profile_id={profile_id}
                profileImage={profile_image}
              />
            ) : (
              <>
                <p>{content}</p>
                {feeling && (
                  <p className={styles.Feeling}>
                    <strong>Feeling: </strong>
                    {getFeelingLabel(feeling)}
                  </p>
                )}
              </>
            )}
          </div>
        </Col>
        {is_owner && !showEditForm && (
          <Col xs="auto" className="align-self-center">
            <MoreDropdown
              handleEdit={() => setShowEditForm(true)}
              handleDelete={handleDelete}
            />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Comment;