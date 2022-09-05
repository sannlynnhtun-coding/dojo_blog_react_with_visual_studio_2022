import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     { title: 'sadfas', body: 'rgreger', author: 'dafsdfherh', id: 1 },
    //     { title: 'fdasf', body: 'wefqwefwef', author: 'dafsfddsf', id: 2 },
    //     { title: 'sdasdf', body: 'rgere', author: 'asdfasdfasdfaf', id: 3 }
    // ]);

    // const [blogs, setBlogs] = useState([]);

    // const[name, setName] = useState('collin');
    // const[age, setAge] = useState(10);

    // // let name = 'collin';

    // const handleClick = (e) => {
    //     console.log('hello, ninjas!', e);
    //     console.log(name);
    //     setName('collin 2');
    //     setAge('59');
    // }

    // const handleClick2 = (name) => {
    //     console.log(`Hello ninjas ${name}`);
    // }
    // const [name, setName] = useState('collin');
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect(() => {
    //     console.log('use efffect ran');
    //     // console.log(blogs);
    //     console.log(name);

    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs')
    //             .then(res => {
    //                 if (!res.ok) {
    //                     throw Error('could not fetch data for that resource');
    //                 }
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 console.log(data);
    //                 setBlogs(data);
    //                 setIsPending(false);
    //             })
    //             .catch((err) => {
    //                 console.log(err.message);
    //                 setIsPending(false);
    //                 setError(err.message);
    //             });
    //     }, 3000);
    // }, [name]);

    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {/* <h2>Home Page</h2>
            <div>{name} is {age} years old</div>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClick2('collin')}>Click me</button> */}

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> */}
            {/* <BlogList blogs={blogs} title="All Blogs" /> */}
            {data && <BlogList blogs={data} title="All Blogs" />}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />} */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'dafsfddsf')} handleDelete={handleDelete} title="All Blogs" /> */}
            {/* <p>{name}</p> */}
            {/* <button onClick={() => setName('collin2')}>change name</button> */}
        </div>
    );
}

export default Home;