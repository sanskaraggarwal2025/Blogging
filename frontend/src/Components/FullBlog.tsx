import Appbar from "./Appbar";
import { Blog } from "../hooks";
import { AvatarComp } from "./BlogCard";
const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold text-button-color">{blog.title}</div>
            <div className="text-button-color pt-2">Post on {blog.createdAt}</div>
            <div className="pt-4 text-button-color">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-button-color text-lg">Author</div>
            <div className="flex w-full">
              <div className=" pt-4 pr-4 flex flex-col justify-center">
                <AvatarComp size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div className="text-xl font-bold flex flex-col justify-center">
                {blog.author.name || "Anonymous"}
              </div>
              
            </div>
            <div className="pt-2 text-button-color ">
                Random catch phrase about the author's ability to grab the
                user's attention
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullBlog;
