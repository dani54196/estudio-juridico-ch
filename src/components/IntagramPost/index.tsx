import { useEffect, useState } from "react";

import { InstagramPost } from "./types";
import instagram from "../../Utility/Instagram";
import { InstagramSection, Posts, Post } from "./styles";

const IntagramPost = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  const [visiblePosts, setVisiblePosts] = useState(3);
  const [totalPosts, setTotalPosts] = useState(25);

  useEffect(() => {
    instagram().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <InstagramSection>
      <h2>Nuestro Instagram</h2>
      <Posts>
        {posts.slice(0, visiblePosts).map((post) => {
          return (
            <Post key={post.id}>
              {post.media_type === "IMAGE" && (
                <img src={post.media_url} alt={post.caption} />
              )}
              {post.media_type === "CAROUSEL_ALBUM" && (
                <img src={post.media_url} alt={post.caption} />
              )}
              {post.media_type === "VIDEO" && (
                <video controls>
                  <source src={post.media_url} type="video/mp4" />
                </video>
              )}
              <p>
                {post.media_type === "VIDEO"
                  ? post.caption.substring(0, 200)
                  : post.caption.substring(0, 300)}
                ...
              </p>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver más
              </a>
            </Post>
          );
        })}
      </Posts>
      {visiblePosts < totalPosts && (
        <button onClick={() => setVisiblePosts((prev) => prev + 4)}>
          Cargar más posts
        </button>
      )}
      <a
        href="https://www.instagram.com/abogadoschyasociados/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Ir a nuestro Instagram</p>
      </a>
    </InstagramSection>
  );
};

export default IntagramPost;
