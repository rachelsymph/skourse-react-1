import React, { Component } from 'react'

export default class AddPost extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            id: 5,
            name: '',
            content: '',
            likes: 0,
        }
       
    }
  
    handleNameChange = (e) =>{
            this.setState({
                name: e.target.value
           
            })
    }

    handleMessageChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
       this.setState({
            id: this.state.id +1,
       })
       this.props.handleProps(this.state);
      
    }

    render() {
        return (
            <div className="inputs">
            <label>Name:</label>
            <input type="text" onChange={this.handleNameChange} ></input>
            <label>Message:</label>
            <input className='message' type="content" onChange={this.handleMessageChange} ></input>
            <button type="submit" onClick={this.handleSubmit}>Add</button>
           </div>
        )
    }
}
