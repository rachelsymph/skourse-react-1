import { useState } from "react";

const Create = ( props ) => {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { name, content }
        props.onFormSubmit( post )
        setName('')
        setContent('')
    }

    return ( 
        <div className="create">
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text" 
                    required
                    value={ name }
                    onChange={(e) => setName( e.target.value ) }
                />
                <label>Content:</label>
                <textarea
                    required
                    value={ content }
                    onChange={(e) => setContent( e.target.value ) }
                ></textarea>
                <button>Add</button>
            </form>
        </div>
     );
}
 
export default Create;