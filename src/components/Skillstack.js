import React from 'react'
import Skill from './Skill';
import {v4 as uuid} from 'uuid';
import { Consumer } from '../context';

 function Skillstack() { 
    return(
        <Consumer>
            {(value)=>{
                const {skills}=value;
                const FinalSkillRow=[];
                for (let i=0;i<skills.length/4;i++){
                    let skillRow=skills.slice(i*4,(i+1)*4);
                    
                    
                    FinalSkillRow.push(
                        <div key={uuid()} className="d-flex justify-content-around py-5">
                            {
                                skillRow.map((skill)=>(
                                    <Skill key={uuid()} skill={skill}/>
                                )
                                )
                            }
                        </div>
                    );
                }
            
                return (
                    <div className="bg-light w-100">
                        <div className="container py-5" style=        {{textAlign: "center"}}>
                            <h1 className="font-weight-light">
                                <span className="text-info">Technology</span>Stack
                            </h1>
                            <div className="lead">I desgin, develope and manage with these toolkits.</div>
                            {FinalSkillRow}
                        </div>
                    </div>        
    );
    }
    }
    </Consumer>
    );
    
  
}

export default Skillstack;
