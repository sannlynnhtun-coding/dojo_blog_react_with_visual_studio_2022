import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        console.log(blog);
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog title : </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label htmlFor="">Blog body : </label>
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)} required />
                <label htmlFor="">Blog author : </label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
                <p>
                    {title}
                    {body}
                    {author}
                </p>
            </form>
        </div>
    );
}

export default Create;