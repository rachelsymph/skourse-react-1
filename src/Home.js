import React from 'react'
import Post from './Post'

export default class Home extends React.Component {
    
    render() {
        return (
            <div className='home'>
                {this.props.posts.map(post => (
                    <Post name={post.name} content={post.content} likes={post.likes} />
                ))}
            </div>
        )
    }
}
