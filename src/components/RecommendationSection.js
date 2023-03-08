import React from 'react'
import RecommendationCard from "./RecommendationCard";
import {v4 as uuid} from 'uuid'
import { Consumer } from '../context';

function RecommendationSection() {
    // const recommendations=[
    //     {
    //         id:1,
    //         name:"Wilmot Reed Hastings Jr",
    //         company:"Netflix",
    //         designation:"CEO",
    //         message:"He Build's good websites",
    //     },
    //     {
    //         id:2,
    //         name:"Andy Jassy",
    //         company:"Amazon",
    //         designation:"CEO",
    //         message:"He is a good Engineer",
    //     },
    //     {
    //         id:3,
    //         name:"Daniel Williams",
    //         company:"Crosover",
    //         designation:"CEO",
    //         message:"He Creates Projects on Time",
    //     },
    //     {
    //         id:4,
    //         name:"Safra Ada Catz",
    //         company:"Oracle",
    //         designation:"CEO",
    //         message:"He Provides good Solutions",
    //     },
    // ]
  return (
    <Consumer>
        {(value)=>{
            const {recommendations}=value;
            return(
                <div className="reco container-fluid bg-light py-5">
                    <div className="row text-center py-5 flex-nowrap overflow-auto scrollbar">
                    {recommendations.map((recommendation)=>(
                    <RecommendationCard key={uuid()} recommendation={recommendation}/>
                    ))}
                    </div>
                </div>
            )
        }
        }
    </Consumer>
    
  )
}
export default RecommendationSection;



