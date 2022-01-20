import React,{useState} from 'react';

import Post from './Post';
import './App.css';
import AddPost from './AddPost';
function App () {
 
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Gian",
      content: "Gwapa kay ka",
      likes: 2,
      
    },
    {
      id: 2,
      name: "Shad",
      content: "Pogi ko",
      likes: 0,
      
    },
    {
      id: 3,
      name: "Carlos",
      content: "Hanging around",
      likes: 0,
      
    },
    {
      id: 4,
      name: "Reyner",
      content: "Pagod na ako!",
      likes: 0,
      
    },
  ]);
  
  const handlePost = (post) =>{
   
    setPosts([...posts, post])
  }


    return (
      
      <div className='app'>
            <AddPost handleProps={handlePost}/>
           <div className='post-div'>
          {
          posts.map((post) => (
           
          <Post id={post.id}  name={post.name} content={post.content} likes={post.likes} />
          ))
          }
          </div> 
      </div>
    );
  }


export default App;


