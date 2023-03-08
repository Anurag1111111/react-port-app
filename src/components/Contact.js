import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../context'
import {v4 as uuid} from 'uuid'

class Contact extends Component {
  
    state={
        name:"",
        email:"",
        description:"",
        submitmessage:"",
        submitmessageTextcolor:"",
    }

    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        })
      }  

    // onChange= (event)=>{
    //     this.setState({
    //     [event.target.name]:event.target.value,
    //     })
    //   }
    onSubmit= async (handler,event)=>{
        event.preventDefault();

        const newContact={
            id:uuid(),
            name:this.state.name,
            email:this.state.email,
            description:this.state.description,
        
        };
    
    const response = await axios.post("http://127.0.0.1:8080/api/contact",newContact)
    
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
    handler=newContact
    console.log(Error)
    console.log(response)
  }
  render() {
    return(
        <Consumer>
            {(value)=>{
                const{submitmessage,submitmessageTextcolor}=this.state;
                const{handler}=value;
                return (
                    <div className='container my-5'>
                      <h1 className='text-center font-weight-light py-5'>
                          <span className='text-info'>Thank You</span> for your Interest!
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
                                      <label htmlFor="description">Tell me about your Project *</label>
                                      <textarea name="description" cols="5" rows="5" className='form-control' onChange={this.onChange}></textarea>
                                  </div>
                                  <button type='submit' className='btn btn-dark float-right my-3' style={{backgroundColor:"black"}}>Lets Talk Business</button>
                              </form>
                          </div>
              
                      </div>
                      <div className='py-5 mx-2 text-center'>
                          <h4 className={submitmessageTextcolor}>{submitmessage}</h4>
                      </div>
                    </div>
                  )
            }}
        </Consumer>
    )
    
  }
}

export default Contact;
