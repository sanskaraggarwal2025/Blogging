import React from "react";
import BlogCard from "../Components/BlogCard";
import Appbar from "../Components/Appbar";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          {blogs.map(blog => <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="14 feb 2024"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
