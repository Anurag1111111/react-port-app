import React from "react";
import ReactMarkdown from "react-markdown";
// import axios from 'axios'
import { Consumer } from "../context";

function projectpage(props) {
  return (
    <Consumer>
      {(value) => {
        const { Projects } = value;
        const id = props.match.params.id;
        const project = Projects.filter((project) => project.id == id)[0];
        const { imageUrl, title, body } = project;

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

export default projectpage;
