import React, { Component } from 'react'
import { Consumer } from '../context';
import {v4 as uuid} from "uuid";
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import MarkdownEditor from '@uiw/react-markdown-editor';


class AddBlog extends Component {
    state={
        imageUrl:'',
        title:'',
        excerpt:'',
        body:'',
        submitMessage:'',
        submitMessageTextColor:'',
    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        })
    }
    onBodyChange=(value)=>{
        this.setState({
            body:value,
        })
    }
    onSubmit= async (handler, event)=>{
        event.preventDefault();
        const newBlog={
            id:uuid(),
            imageUrl:this.state.imageUrl,
            title:this.state.title,
            excerpt:this.state.excerpt,
            body:this.state.body,
        };
        
        const response = await axios.post("http://127.0.0.1:8080/api/blog",newBlog)

        const isSuccessful = response.data.isSuccessful;
        if(isSuccessful){
            this.setState({
                submitMessage:'Published Successfuly',
                submitMessageTextColor:"text-info"
            })
        }else{
            this.setState({
                submitMessage:"Not Published",
                submitMessageTextColor:"text-danger"
            })
        }
        
        event.target.reset();
        console.log(newBlog);
        handler("ADD_BLOG",newBlog);
        console.log(handler);

    }
    render() {
      return(
        <Consumer>
            {(value)=>{
                 const{imageUrl,title,body,submitMessage,submitMessageTextColor}=this.state;
                 const{handler}=value;
                 return (
                   <div className="container py-5 my-5">
                         <h1 className='text-center my-5 font-weight-light'>Add <span className='text-info'> Blog </span>
                         </h1>
                         <div className="row px-3">
                             <div className="col-12 col-lg-6">
                                 <form onSubmit={this.onSubmit.bind(this, handler)}>
                                     <div className="form-group">
                                         <label htmlFor="imageUrl">Featured Image URL*</label>
                                         <input type="text"
                                         name='imageUrl'
                                         id='imageUrl'
                                         className='form-control'
                                         onChange={this.onChange}
                                         required />
                                     </div>
                                     <div className="form-group">
                                         <label htmlFor="title">Title*</label>
                                         <input type="text"
                                         name='title'
                                         id='title'
                                         className='form-control'
                                         onChange={this.onChange}
                                         required />
                                     </div>
                                     <div className="form-group">
                                         <label htmlFor="excerpt">Excerpt*</label>
                                         <input type="text"
                                         name='excerpt'
                                         id='excerpt'
                                         className='form-control'
                                         onChange={this.onChange}
                                         required />
                                     </div>
                                     <MarkdownEditor
                                     onChange={this.onBodyChange}
                                      /><br/>
                                      <div className="text-center">
                                      <button type='submit' className='btn btn-dark btn-lg btn-outline-info' >Publish</button>
                                      </div>
                                 </form>
                                 <div className='py-5 mx-2 text-center'>
                                     <h4 className={submitMessageTextColor}>{submitMessage}</h4>
                                 </div>
                             </div>
                             <div className="col-12 col-lg-6 markdown">
                                 <div className="justify-content-center">
                                     <img src={imageUrl} alt={title} />
                                     <h1 className='font-weight-light text-center my-5'>{title}</h1>
                                     <ReactMarkdown children={body}/>
                                 </div>
                             </div>
                         </div>
                   </div>
                )
            }
            }
        </Consumer>
    )
   
  }
}

export default AddBlog;
