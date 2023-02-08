import React from "react";

function BlogContent(props) {
  return (
    <div id="blog-content">
      {props.articleText}
      console.log(props)
    </div>
  );
}

export default BlogContent;
