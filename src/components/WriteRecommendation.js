import React, { Component } from 'react'
import { Consumer } from '../context'
import {v4 as uuid} from 'uuid';
import axios from 'axios';

class WriteRecommendation extends Component {
    state={
        name:"",
        email:"",
        company:"",
        designation:"",
        recommendation:"",
        submitmessage:"",
        submitmessageTextcolor:"",
    }
    
  onChange=(event)=>{
    this.setState({
        [event.target.name]:event.target.value,
    })
  }
  onSubmit = async (handler, event)=>{
    event.preventDefault();
    const newRecommendation={
        id:uuid(),
        name:this.state.name,
        email:this.state.email,
        company:this.state.company,
        designation:this.state.designation,
        message:this.state.recommendation,
    };

    const response = await axios.post("http://127.0.0.1:8080/api/write",newRecommendation)
    
    const isSuccessful = response.data.isSuccessful;

    const{name}=this.state;
    if(isSuccessful){
        this.setState({
            submitmessage:`Thank You ${name}, Got your message.`,
            submitmessageTextcolor:"text-info"
        })
    }else{
        this.setState({
            submitmessage:"oops Something went wrong!",
            submitmessageTextcolor:"text-danger"
        })
    }
    event.target.reset();
    console.log(newRecommendation);
    handler("ADD_RECOMMENDATION",newRecommendation);
    console.log(handler);
  }
  render() {
    return(
        <Consumer>
            {(value) =>{
                const{ submitmessage,submitmessageTextcolor}=this.state;
                const {handler}=value;
                return (
                    <div className='container my-5'>
                      <h1 className='text-center font-weight-light py-5'>
                          <span className='text-info'>Thank You</span> for your Valuable Feedback
                      </h1>
                      <div className="row justify-content-center">
                          <div className='col-10 col-lg-5'>
                              <form onSubmit={this.onSubmit.bind(this,handler)}>
                                  <div className='py-3'>
                                      <label htmlFor="name">Name*</label>
                                      <input type="text" name='name' className='form-control' onChange={this.onChange} />
                                  </div>
                                  <div>
                                      <label htmlFor="email">Email*</label>
                                      <input type="email" name='email' className='form-control' onChange={this.onChange}/>
                                  </div>
                                  <div className='py-3'>
                                      <label htmlFor="company">Company /     Institution*</label>
                                      <input type="text" name='company' className='form-control' onChange={this.onChange} />
                                  </div>
                                  <div className='py-3'>
                                      <label htmlFor="designation">Designation*</label>
                                      <input type="text" name='designation' className='form-control' onChange={this.onChange} />
                                  </div>
                                  <div className='py-3'>
                                      <label htmlFor="recommendation">Recommendation *</label>
                                      <textarea name="recommendation" cols="5" rows="5" className='form-control' onChange={this.onChange}></textarea>
                                  </div>
                                  <button type='submit' className='btn btn-dark float-right my-3' style={{backgroundColor:"Purple"}}>Submit Recommendation</button>
                              </form>
                          </div>
              
                      </div>
                      <div className='py-5 mx-2 text-center'>
                          <h4 className={submitmessageTextcolor}>{submitmessage}</h4>
                      </div>
                    </div>
                  )
            }
            }
        </Consumer>
    )
    }
}
export default WriteRecommendation;

