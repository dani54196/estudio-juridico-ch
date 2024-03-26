import { useEffect, useState } from "react";
import { InstagramPost } from "./types";
import instagram from "../../Utility/Instagram";

const IntagramPost = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    instagram().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            {post.media_type === "IMAGE" && (
              <img src={post.media_url} alt={post.caption} />
            )}
            {post.media_type === "VIDEO" && (
              <video controls>
                <source src={post.media_url} type="video/mp4" />
              </video>
            )}
            <p>{post.caption}</p>
          </div>
        );
      })}
    </div>
  );
};

export default IntagramPost;
