import { Post } from "./Post";
import { useEffect } from "react";
import { fetchPosts, selectPosts } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";

export function Posts() {
  const dispatch = useDispatch();

  const postsStatus = useSelector((state) => state.posts.status);
  const searchQuery = useSelector((state) => state.searchBar.searchQuery);
  const postsError = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postsStatus === "idle" || "succeeded") {
      dispatch(fetchPosts());
    }
  }, [searchQuery]);

  const posts = useSelector(selectPosts);
  return (
    <>
      <div id="top"></div>
      {postsStatus === 'pending' ? <p>Loading</p> :
      postsStatus === 'error' ? <p>{postsError}</p>  :
      posts.map((post) => (
        <Post
          key={post.data.id}
          title={post.data.title}
          preview={post.data.preview ? post.data.url : ""}
          ups={post.data.ups}
          comments={post.data.num_comments}
          created_time={post.data.created_utc}
          author={post.data.author}
          is_video={post.data.is_video}
          video={
            post.data.is_video ? post.data.media.reddit_video.fallback_url : ""
          }
          post_hint={post.data.post_hint}
          permalink={post.data.permalink}
          id={post.data.id}
        />
      ))}
    </>
 );
}
