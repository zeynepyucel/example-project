import React from "react";

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2> Loading...</h2>;
    }

    return (
    <ul className="list-gruop mb-4">
        {posts.map(post => (
            <li key={post.id} className='List-group-item'>
                {post.title}
            </li>
        ))}
    </ul>
    );
};

export default Posts;