import BlogCard from "../Components/BlogCard";
import Appbar from "../Components/Appbar";
import { useBlogs } from "../hooks";
import Skeleton from "../Components/Skeleton";
const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.createdAt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
