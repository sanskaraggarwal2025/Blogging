import axios from 'axios';
import { useState, useEffect } from 'react'
import { BACKEND_URL } from '../Config';

export interface Blog {
    "content": string;
    "title": string;
    "id": string;
    "author": {
        "name": string
    }
}

export const useBlog = ({id}:{id:string}) => {
    const [loading, setloading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        const fetchBlog = async() => {
            let res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers:{
                    Authorization:`Bearer ` + localStorage.getItem('token')
                }
            })
            setBlog(res.data.post);
            setloading(false);
        }
        fetchBlog 
    },[id])


    return{
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            let res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers: {
                    Authorization:`Bearer ` + localStorage.getItem('token')
                }
            })
            setBlogs(res.data.blogs);
            setLoading(false);
        }
        fetchBlogs();

    }, []);
    console.log(blogs);
    
    return {
        loading,
        blogs
    }
}
