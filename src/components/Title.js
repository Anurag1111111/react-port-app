import React from "react";
import Anu from 'D:/react_app/app_1/src/components/assets/anu.jpg';
function Title(props){
    // const name="Anurag Jangir";
    // const Text="I am Software Engineer from India";
    const {name,Text}=props;
    // console.log(props);
    return(
        <div className=" logo bg-light w-100 backgroung">
        <div className="container my-10 py-5">
            <div className="row text-center align-items-center">
                <div className="col-12 col-md-6">
                    <img className="img-fluid rounded-circle shadow-4-strong mt-4" 
                    style={{width: "300px",
                        height: "300px",
                        borderRadius: "300%"}}
                    src={Anu}
                    alt="anu"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <div className="font-weight-light">
                        <h1>Hi, I am <span className="text-info">{name}</span></h1> 
                    </div>
                    <h4 className="font-weight-light">{Text} </h4>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Title;