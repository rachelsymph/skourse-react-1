import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState([
    {name: "Gian", content: "Gwapa kay ka", likes: 0},
    {name: "Shad", content: "Pogi ko", likes: 0},
    {name: "Carlos", content: "Hanging around", likes: 0},
    {name: "Reyner", content: "Pagod na ako!", likes: 0},
  ])


const handleSubmit = post => {
  setPosts(oldPosts => {
    const createPost = [...oldPosts, post]
    return createPost
  })
}

console.log(posts)
  return (

      <div className="App">
        <Navbar/>
        <div className="content">
          <Home posts={ posts }/>
        </div>
        <Create onFormSubmit={handleSubmit} />
      </div>

  );
}

export default App;