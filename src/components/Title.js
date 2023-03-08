import React from "react";
import Anu from 'D:/react_app/app_1/src/components/assets/anu.jpg';
import Typewriter from 'typewriter-effect'

function Title(props){
    // const toRotate = ['I am Software Engineer from India.','I am Web Designer.', 'I am Web Developer.', 'I am Ui|Ux Developer.'];
    // const [loopNum, setLoopnNum] = useState(0);
    // const [isDeleting, setisDeleting] = useState(false);
    // const [text, settextState] = useState('');
    // const [delta, setDelta] = useState(0);
    
    // useEffect(()=>{
    //     let ticker = setInterval(()=>{
    //         tick()
    //     }, delta)
    //     return () =>{clearInterval(ticker)}
    // },[text])

    // const tick = () =>{
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
    //     settextState(updatedText);
    //     if(!isDeleting && updatedText === fullText){
    //         setisDeleting(true);
    //         setDelta(100);
    //     }else if(isDeleting && updatedText === ''){
    //         setisDeleting(false);
    //         setLoopnNum(loopNum+1);
    //         setDelta(250);
    //     }
    // }
    // const name="Anurag Jangir";
    // const Text="I am Software Engineer from India";
    const {name,Text}=props;
    // console.log(props);
    return(
        <div className=" logo w-100 background pt-5">
        <div className="container my-10 py-5">
            <div className="row text-center align-items-center">
                <div className="col-12 col-md-6">
                    <img className="img-fluid rounded-circle shadow-4-strong mt-4" 
                    style={{width: "350px",
                        height: "350px",
                        borderRadius: "350%"}}
                    src={Anu}
                    alt="anu"
                    />
                </div>
                <div className="col-12 col-md-6 mt-5">
                    <div className="font-weight-light">
                        <h1>Hi, I am <span className="text-info wrap">{name}</span></h1> 
                    </div>
                    <h4 className="font-weight-light"><Typewriter
                    onInit={(typewriter)=>{
                        typewriter
                        .typeString('I am Software Engineer from India.')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('I am Ui|Ux Developer.')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('I am Web Designer.')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('I am Web Developer.')
                        .start()
                        
                    }}
                    />{Text}</h4>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Title;