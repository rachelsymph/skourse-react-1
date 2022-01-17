import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import { useState } from 'react'

function App() {

  const [ posts, setPosts ] = useState([
    { name: "Gian", content: "Gwapa kay ka", id:1 },
    { name: "Shad", content: "Pogi ko", id:2 },
    { name: "Carlos", content: "Hanging around", id:3 },
    { name: "Reyner", content: "Pagod na ako!", id:4 },
  ])


  const handleSubmit = post => {
    setPosts( oldPosts => {
      const createPost = [ ...oldPosts, post]
      return createPost
    })
  }

    return (

        <div className="App">
          <Navbar/>
          <div className="content">
            <Home posts={ posts }/>
          </div>
          <Create onFormSubmit={ handleSubmit } />
        </div>

    );
  }

export default App;