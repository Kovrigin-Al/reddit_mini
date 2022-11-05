import { Post } from "./Post";
import { useEffect } from "react";
import { fetchPosts, selectPosts } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";

export function Posts() {
  const dispatch = useDispatch();

  const postsStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, []);

  const posts = useSelector(selectPosts);
  return (
    <> 
  {posts.map((post, index) => (
    <Post
      key={index.toString()}
      title={post.data.title}
      preview={post.data.preview ? post.data.url : ""} 
      ups={post.data.ups}
      comments={post.data.num_comments}
      created_time={post.data.created_utc}
      author={post.data.author}
    />))}
    </>
  );
    }
