import Post from './Post'

const Home = ({ posts }) => {
    return (
        <div className='home'>
            { posts.map( post => (
                <Post name={ post.name } content={ post.content } key={ post.id }/>
            ))}
        </div>
      );
}
 
export default Home;