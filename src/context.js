import React,{Component} from "react"
import axios from "axios";

const CountContext = React.createContext();

export class Provider extends Component{
    // addProjecthandler = (newProject)=>{
    //     this.setState({
    //         Projects:[newProject, ...this.state.Projects],
            
    //     });
    // };
    
    handler=(action, newObject)=>{
        
        switch(action){
            case "ADD_PROJECT":
                this.setState({
                    Projects:[newObject, ...this.state.Projects],
            })
            break;
            case "ADD_BLOG":
                this.setState({
                    Blogs:[newObject, ...this.state.Blogs],
            })
            break;
            case "ADD_RECOMMENDATION":
                this.setState({
                    recommendations:[newObject, ...this.state.recommendations],
            })
            break;
            default: break;
                
    };
        
    };
    
    state={
        handler : () =>{
            this.forceUpdate();
        },
        
        Projects:[
            {   
                id:1,
                imageUrl:"http://127.0.0.1:5502/lp.jpg",
                title:"Project1",
                excerpt:"This is my project about...",
                body:"body1"
            },
            {   
                id:2,
                imageUrl:"http://127.0.0.1:5502/lp1.jpg",
                title:"Project2",
                excerpt:"This is my project about...",
                body:"body2"
            },
            {   
                id:3,
                imageUrl:"http://127.0.0.1:5502/lp4.jpg",
                title:"Project3",
                excerpt:"This is my project about...",
                body:"body3"

            },
            {   
                id:4,
                imageUrl:"http://127.0.0.1:5502/lp1.jpg",
                title:"Project4",
                excerpt:"This is my project about...",
                body:"body4"

            },
            {   
                id:5,
                imageUrl:"http://127.0.0.1:5502/lp4.jpg",
                title:"Project5",
                excerpt:"This is my project about...",
                body:"body5"

            },
        ],
        Blogs:[
            {   
                id:1,
                imageUrl:"http://127.0.0.1:5502/lp.jpg",
                title:"Blog1",
                excerpt:"This is my Blog about...",
                body:"body1"
            },
            {   
                id:2,
                imageUrl:"http://127.0.0.1:5502/lp1.jpg",
                title:"Blog2",
                excerpt:"This is my Blog about...",
                body:"body2"
            },
            {   
                id:3,
                imageUrl:"http://127.0.0.1:5502/lp4.jpg",
                title:"Blog3",
                excerpt:"This is my Blog about...",
                body:"body3"

            },
            {   
                id:4,
                imageUrl:"http://127.0.0.1:5502/lp1.jpg",
                title:"Blog4",
                excerpt:"This is my Blog about...",
                body:"body4"

            },
            {   
                id:5,
                imageUrl:"http://127.0.0.1:5502/lp4.jpg",
                title:"Blog5",
                excerpt:"This is my Blog about...",
                body:"body5"

            },

        ],
        skills:[
            {
                id:1,
                name:"Html",
                imageUrl:"http://127.0.0.1:5502/pngwing.com.png",
                starsTotal:3,
                starsActive:3,
            },
            {
                id:2,
                name:"CSS",
                imageUrl:"http://127.0.0.1:5502/pngwing.com%20(1).png",
                starsTotal:3,
                starsActive:3,
            },
            {
                id:3,
                name:"JS",
                imageUrl:"http://127.0.0.1:5502/pngwing.com%20(2).png",
                starsTotal:3,
                starsActive:2,
            },
            {
                id:4,
                name:"Bootstrap",
                imageUrl:"http://127.0.0.1:5502/pngwing.com%20(3).png",
                starsTotal:3,
                starsActive:2,
            },
        ],
        recommendations:[
            {
                id:1,
                name:"Wilmot Reed Hastings Jr",
                company:"Netflix",
                designation:"CEO",
                message:"He Build's good websites",
            },
            {
                id:2,
                name:"Andy Jassy",
                company:"Amazon",
                designation:"CEO",
                message:"He is a good Engineer",
            },
            {
                id:3,
                name:"Daniel Williams",
                company:"Crosover",
                designation:"CEO",
                message:"He Creates Projects on Time",
            },
            {
                id:4,
                name:"Safra Ada Catz",
                company:"Oracle",
                designation:"CEO",
                message:"He Provides good Solutions",
            },
        ]
        
    };
    

    async componentDidMount(){
        const  [
            responseRecommendation, responseSkill,responseProject,responseBlog
        ]= await Promise.all([
            axios.get("http://127.0.0.1:8080/api/recommendations"),
            axios.get("http://127.0.0.1:8080/api/skills"),
            axios.get("http://127.0.0.1:8080/api/projects"),
            axios.get("http://127.0.0.1:8080/api/blogs")
        ])
        const newState={}
        if(responseRecommendation.data.isSuccessful){
            newState.recommendations=responseRecommendation.data.results
        }
        if(responseSkill.data.isSuccessful){
            newState.skills=responseSkill.data.results
        }
        if(responseProject.data.isSuccessful){
            newState.Projects=responseProject.data.results
        }
        if(responseBlog.data.isSuccessful){
            newState.Blogs=responseBlog.data.results
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
        return(
            <CountContext.Provider value={this.state}>
                {this.props.children}
            </CountContext.Provider>
            
        );
    }
};

export const Consumer = CountContext.Consumer;  