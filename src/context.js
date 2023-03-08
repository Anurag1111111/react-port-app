import React, { Component } from "react";
import axios from "axios";

const CountContext = React.createContext();

export class Provider extends Component {
  // addProjecthandler = (newProject)=>{
  //     this.setState({
  //         Projects:[newProject, ...this.state.Projects],

  //     });
  // };

  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          Projects: [newObject, ...this.state.Projects],
        });
        break;
      case "ADD_BLOG":
        this.setState({
          Blogs: [newObject, ...this.state.Blogs],
        });
        break;
      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;
      default:
        break;
    }
  };

  state = {
    handler: () => {
      this.forceUpdate();
    },

    Projects: [
      {
        id: 1,
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537__340.jpg",
        title: "Project1",
        excerpt: "This is my project about...",
        body: "body1",
      },
      {
        id: 2,
        imageUrl:
          "https://fliphtml5.com/learning-center/wp-content/uploads/2016/07/11.jpg",
        title: "Project2",
        excerpt: "This is my project about...",
        body: "body2",
      },
      {
        id: 3,
        imageUrl:
          "https://wpengine.com/wp-content/uploads/2020/08/pexels-burst-374631-1024x683.jpg",
        title: "Project3",
        excerpt: "This is my project about...",
        body: "body3",
      },
      {
        id: 4,
        imageUrl:
          "https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg",
        title: "Project4",
        excerpt: "This is my project about...",
        body: "body4",
      },
      {
        id: 5,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452808_960_720.jpg",
        title: "Project5",
        excerpt: "This is my project about...",
        body: "body5",
      },
    ],
    blogs: [
      {
        id: 1,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452808_960_720.jpg",
        title: "Blog1",
        excerpt: "This is my Blog about...",
        body: "body1",
      },
      {
        id: 2,
        imageUrl:
          "https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg",
        title: "Blog2",
        excerpt: "This is my Blog about...",
        body: "body2",
      },
      {
        id: 3,
        imageUrl:
          "https://wpengine.com/wp-content/uploads/2020/08/pexels-burst-374631-1024x683.jpg",
        title: "Blog3",
        excerpt: "This is my Blog about...",
        body: "body3",
      },
      {
        id: 4,
        imageUrl:
          "https://fliphtml5.com/learning-center/wp-content/uploads/2016/07/11.jpg",
        title: "Blog4",
        excerpt: "This is my Blog about...",
        body: "body4",
      },
      {
        id: 5,
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537__340.jpg",
        title: "Blog5",
        excerpt: "This is my Blog about...",
        body: "body5",
      },
    ],
    skills: [
      {
        id: 1,
        name: "Html",
        imageUrl:
          "https://w7.pngwing.com/pngs/390/229/png-transparent-logo-html5-brand-design-text-logo-number.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS",
        imageUrl:
          "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "JS",
        imageUrl:
          "https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "Bootstrap",
        imageUrl: "https://icons.getbootstrap.com/assets/img/icons-hero.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 5,
        name: "React.JS",
        imageUrl:
          "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 6,
        name: "Python",
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/012/697/295/original/3d-python-programming-language-logo-free-png.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 7,
        name: "Flask",
        imageUrl:
          "https://www.seekpng.com/png/detail/875-8753366_flask-framework-logo-svg.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 8,
        name: "MySQL",
        imageUrl:
          "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
        starsTotal: 3,
        starsActive: 2,
      },
    ],
    recommendations: [
      {
        id: 1,
        name: "Wilmot Reed Hastings Jr",
        company: "Netflix",
        designation: "CEO",
        message: "He Build's good websites",
      },
      {
        id: 2,
        name: "Andy Jassy",
        company: "Amazon",
        designation: "CEO",
        message: "He is a good Engineer",
      },
      {
        id: 3,
        name: "Daniel Williams",
        company: "Crosover",
        designation: "CEO",
        message: "He Creates Projects on Time",
      },
      {
        id: 4,
        name: "Safra Ada Catz",
        company: "Oracle",
        designation: "CEO",
        message: "He Provides good Solutions",
      },
    ],
  };

  async componentDidMount() {
    const [
      responseRecommendation,
      responseSkill,
      responseProject,
      responseBlog,
    ] = await Promise.all([
      axios.get("http://127.0.0.1:8080/api/recommendations"),
      axios.get("http://127.0.0.1:8080/api/skills"),
      axios.get("http://127.0.0.1:8080/api/projects"),
      axios.get("http://127.0.0.1:8080/api/blogs"),
    ]);
    const newState = {};
    if (responseRecommendation.data.isSuccessful) {
      newState.recommendations = responseRecommendation.data.results;
    }
    if (responseSkill.data.isSuccessful) {
      newState.skills = responseSkill.data.results;
    }
    if (responseProject.data.isSuccessful) {
      newState.Projects = responseProject.data.results;
    }
    if (responseBlog.data.isSuccessful) {
      newState.blogs = responseBlog.data.results;
    }
    this.setState(newState);
  }

  // async componentDidMount(){
  //     let response= await axios.get("http://127.0.0.1:8080/api/recommendations")
  //     if (response.data.isSuccessful){
  //         this.setState({
  //             recommendations:response.data.results,
  //         })
  //     }

  //      response= await axios.get("http://127.0.0.1:8080/api/skills")

  //     if (response.data.isSuccessful){
  //         this.setState({
  //             skills:response.data.results,
  //         })
  //     }

  //     response= await axios.get("http://127.0.0.1:8080/api/projects")
  //     console.log(response)
  //     if (response.data.isSuccessful){
  //         this.setState({
  //             Projects:response.data.results,
  //         })
  //     }

  // }

  render() {
    return (
      <CountContext.Provider value={this.state}>
        {this.props.children}
      </CountContext.Provider>
    );
  }
}

export const Consumer = CountContext.Consumer;
