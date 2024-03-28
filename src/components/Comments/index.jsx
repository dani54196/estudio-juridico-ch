import React, { useEffect } from "react";

const Comments = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>Reseñas</h2>
      <div className="sk-ww-google-reviews" data-embed-id="25389145"></div>;
    </div>
  );
};

export default Comments;
