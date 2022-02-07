import React, {useState} from 'react'

const  AddPost = ({handleProps})=> {
  
    const [post, setPost] = useState({
         id: 5, name:'', content:'', likes:0,
        })
       
  
   const handleNameChange = (e) =>{  
            setPost({
                ...post,name: e.target.value
            })
            
    
    }

    const  handleContentChange = (e) =>{
        setPost({
            ...post,content: e.target.value
        })
        
    }


    const handleSubmit = (e) => {

        if (post.name === "" || post.content === "")  {
            alert("Don't leave it blank");
            return;
          }
        
        console.log({post})
       setPost({
            ...post,id: post.id +1,
       })
      handleProps(post);
      
    }

    
        return (
            <div className="inputs">
            <label>Name:</label>
            <input type="text" onChange={handleNameChange}></input>
            <label>Message:</label>
            <input className='message' type="content"  onChange={handleContentChange}></input>
            <button type="submit" onClick={handleSubmit}>Add</button>
           </div>
        )
    
}

export default AddPost;