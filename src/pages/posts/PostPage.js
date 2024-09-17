/*
 * Fetch post data and related comments based on the URL parameter (post id).
 * Populate the component state with post and comments data once fetched.
 * Display dynamic content including popular profiles, post, comments, and comment form.
 * Handle different layout for mobile and desktop views.
 */

import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import Comment from "../comments/Comment";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

function PostPage() {
  const { id } = useParams(); // Extract post id from the URL
  const [post, setPost] = useState({ results: [] });  // State to hold post data
  const [comments, setComments] = useState({ results: [] }); // State to hold comments
  const currentUser = useCurrentUser(); // Get the current user context
  const profile_image = currentUser?.profile_image; // Get current user's profile image

   /*
   * Fetch the post data and comments associated with the post when the component mounts.
   * Uses axiosReq to make API requests to fetch the data from the backend.
   */
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`), // Fetch post data by post id
          axiosReq.get(`/comments/?post=${id}`), // Fetch comments related to the post
        ]);
        setPost({ results: [post] }); // Update the state with fetched post data
        setComments(comments); // Update the state with fetched comments
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [id]);

    /*
   * Render the layout for the post page.
   * Includes the main column with the post, comment form, and comments,
   * and a sidebar for displaying popular profiles on larger screens.
   */
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            <InfiniteScroll
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            >
              {comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setPost={setPost}
                  setComments={setComments}
                />
              ))}
            </InfiniteScroll>
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostPage;
