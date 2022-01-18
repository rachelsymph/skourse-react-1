import React from 'react';

import Post from './Post';
import './App.css';
import AddPost from './AddPost';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {id: '1',name: "Gian", content:"Gwapa kay ka", likes:2},
        {id: '2',name: "Shad", content:"Pogi ko", likes:0},
        {id: '3',name: "Carlos", content:"Hanging around", likes:0},
        {id: '4',name: "Reyner", content:"Pagod na ako!", likes:0},
      ]
    }
  }
  handlePost = (post) =>{
    this.setState(loadState =>({
     posts: [...loadState.posts, post]
    }))
  }

  render() {
    return (
      <div className='app'>
            <AddPost handleProps={this.handlePost}/>
           <div className='post-div'>
          {this.state.posts.map(post => (
          <Post key={post.id} name={post.name} content={post.content} likes={post.likes} />
          ))}
          </div> 
      </div>
    );
  }}


export default App;


