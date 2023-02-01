import React from 'react'
import {v4 as uuid} from 'uuid';

 function Skill(props) {
  const{name,imageUrl,starsTotal,starsActive}=props.skill;
  const starslist=[];
  for (let i =0;i<starsTotal;i++){
    if(i<starsActive){
      starslist.push(<span key={uuid()} className="text-info"><i className="bi bi-star-fill"></i></span>)
    }else{
      starslist.push(<span key={uuid()} ><i className="bi bi-star"></i></span>)
    }
  }
  return (
    <div>
        <img src={imageUrl}
        className="rounded-circle"
        alt={name}
        style={{height: "100px", width: "100px"}}/>
            <div>
                {starslist}
            </div>
    </div>
  );
}

export default Skill;
