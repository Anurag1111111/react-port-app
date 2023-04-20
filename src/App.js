import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import Skillstack from "./components/Skillstack";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/Not Found";
import projectpage from "./components/projectpage";
import Addproject from "./components/Addproject";
import { Provider } from "./context";
import AllProjects from "./components/AllProjects";
import Test from "./components/Test";
import About from "./components/About";
import RecommendationSection from "./components/RecommendationSection";
import WriteRecommendation from "./components/WriteRecommendation";
import BlogsSection from "./components/BlogsSection";
import AllBlogs from "./components/AllBlogs";
import blogpage from "./components/blogpage";
import AddBlog from "./components/AddBlog";
import ScrollTotop from "./components/ScrollTotop";

function App() {
  return (
    <Provider>
      <BrowserRouter basename="/react-port-app/" forceRefresh>
        <ScrollTotop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Title name="Anurag Jangir" Text=" " />
            <RecommendationSection />
            <Skillstack />
            <ProjectSection />
            <About />
            <BlogsSection />
          </Route>
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/write" component={WriteRecommendation} />

          <Route exact path="/all-projects" component={AllProjects} />
          <Route exact path="/all-blogs" component={AllBlogs} />
          <Route exact path="/project/add" component={Addproject} />
          <Route exact path="/blog/add" component={AddBlog} />
          <Route exact path="/project/:id" component={projectpage} />
          <Route exact path="/blog/:id" component={blogpage} />
          <Route exact path="/test" component={Test} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
  // return React.createElement(
  //   "div",
  //   {className:"App"},
  //   React.createElement("h1",null,"Portfolio Website")
  // )
}

export default App;
