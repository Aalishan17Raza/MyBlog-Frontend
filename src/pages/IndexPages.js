import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function IndexPages() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://myblog-api.onrender.com/post').then(res => {
            res.json().then(postss => {
                setPosts(postss);
            })
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            {posts.length > 0 && posts.map((post, id) => {
                return <Post key={id} {...post} />
            })}
        </>
    );
}