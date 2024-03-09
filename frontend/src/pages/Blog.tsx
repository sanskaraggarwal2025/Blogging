import Appbar from "../Components/Appbar";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import FullBlog from "../Components/FullBlog";
const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog) {
    return (
      <>
        <Appbar />
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};

export default Blog;
