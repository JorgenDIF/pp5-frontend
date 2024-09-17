/*
 * This component represents an individual post in the application.
 * It includes details such as the post owner, profile image, title,
 * content, mood, category, and like/comment counts. The component
 * integrates with the CurrentUserContext to determine the current user's details.
 */
import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

// Import mood and category data
import { moods } from "../../data/mood"; 
import { categories } from "../../data/category";

const Post = (props) => {
   // Destructuring props to extract post details
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    mood, // The mood selected for the post
    category,  // The category selected for the post
    postPage,
    setPosts,
  } = props;

  // Access the current user information from the context
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner; // Check if the current user owns the post
  const history = useHistory();

   // Handle editing the post if the user owns it
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  // Handle deleting the post if the user owns it
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      //console.log(err);
    }
  };

  // Handle liking the post
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      //console.log(err);
    }
  };

  // Handle unliking the post
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
     // console.log(err);
    }
  };

   /*
   * To avoid hardcoding the mood and category labels directly into this component,
   * I decided to retrieve these values from separate data files (`mood.js` and `category.js`).
   * This solution is a compromise, allowing for flexibility without hardcoding,
   * and helps reduce code repetition throughout the project.
   *
   * The current implementation fetches the mood and category labels from static arrays,
   * using the `find()` method to match the value from the post data with the correct label.
   * Although this approach works for now, I plan to make this more dynamic in the future
   * by integrating mood and category models directly into the backend, allowing for easier
   * scalability and dynamic updates without needing to modify the frontend.
   * This will be part of the future improvements to the project.
   */

  const moodObject = moods.find((m) => m.value === mood);
  const categoryObject = categories.find((c) => c.value === category);

    /*
   * Renders the post card with profile details, post image, title, content,
   * mood, category, and interactive like/comment buttons. Handles different states
   * based on whether the current user is the post owner or a visitor.
   */

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`} className="d-flex align-items-center">
            <Avatar src={profile_image} height={55} />
            <span>{owner}</span>
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && <MoreDropdown  
            handleEdit={handleEdit}
            handleDelete={handleDelete} 
            />}
          </div>
        </div>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="fw-bold text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {moodObject && (
          <Card.Text>
            <strong>Mood:</strong> {moodObject.label}
          </Card.Text>
        )}
        {categoryObject && (
          <Card.Text>
            <strong>Category:</strong> {categoryObject.label}
          </Card.Text>
        )}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can&apos;t like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`} aria-label="View Comments">
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;