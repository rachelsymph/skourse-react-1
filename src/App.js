import React from 'react';

import Post from './Post';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.postID = 0;
    this.state = {
      posts: [ 
      ],
      message: "",
      name: "",
    }
  }

  setName = (e) =>{
    this.setState({
      name: e.target.value
    })
  }

  setMessage = (e) =>{
    this.setState({
      message: e.target.value
    })
  }

  addPost = (e) =>{
    this.setState({
      name: e.target.value,
      message: e.target.value
    })
    this.postID = this.postID + 1;
    const PostArray = Object.assign([], this.state.posts)
    PostArray.push({
      id : this.postID,
      message : this.state.message,
      name : this.state.name,
      likes : 0
    })

    this.setState({
      posts: PostArray
    })
  }

  render() {
    return (
      <div className='app'>
       <div className="inputs">
        <label>Name:</label>
        <input type="text" onChange={this.setName}></input>
        <label>Message:</label>
        <input className='message' type="content" onChange={this.setMessage}></input>
        <button type="submit" onClick={this.addPost}>Add</button>
       </div>
           <div className='post-div'>
          {this.state.posts.map(post => (
          <Post name={post.name} content={post.content} likes={post.likes} />
          ))}
          </div> 
      </div>
    );
  }}


export default App;


