import React from "react";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../context";
// import axios from 'axios';

function blogpage(props) {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        const id = props.match.params.id;
        const blog = blogs.filter((blog) => blog.id == id)[0];
        const { imageUrl, title, body } = blog;

        return (
          <div className="container py-5 my-5 markdown">
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} className="w-100" />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <ReactMarkdown children={body} />
          </div>
        );
      }}
    </Consumer>
  );
}

export default blogpage;
