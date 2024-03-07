import React from 'react'
import Appbar from '../Components/Appbar'
import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom'
import FullBlog from '../Components/FullBlog'
const Blog = () => {
  const {id} = useParams();
  const {loading,blog} = useBlog({
    id:id || ""
  });

  if(loading){
    return <div>
      loading...
    </div>
  }         
  return (
    <div>
      <FullBlog blog={blog}/>
    </div>
  )
}

export default Blog