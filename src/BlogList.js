// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;

import { Link } from "react-router-dom";

// const BlogList = ({ blogs, title, handleDelete }) => {
const BlogList = ({ blogs, title }) => {


    // console.log(props, blogs, title);
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((item) => (
                <div className="blog-preview" key={item.id}>
                    <Link to={'/blogs/' + item.id}>
                        <h2>{item.title}</h2>
                    </Link>
                    <p>Written by {item.author}</p>
                    {/* <butto္n onClick={() => handleDelete(item.id)}>delete blog</button> */}
                </div>
            ))}
        </div>
    );
}
export default BlogList;