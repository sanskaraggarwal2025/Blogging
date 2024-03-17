import { AvatarComp } from "./BlogCard";
import { Link,useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";


const Appbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token")
    navigate('/')
  }
  return (
    <>
      <div className="navbar flex h-full justify-between bg-black-color text-white border-b-2">
        <div className="flex flex-col justify-center">
          <Link to = {'/blogs'}>
          <div className="font-extrabold text-4xl p-8">Let's Blog</div>
          </Link>
        </div>
        <div className="flex flex-col justify-center w-64">
          <div className="flex justify-around">
            <div>
              <Link to={"/publish"}>
                <div className="p-4 hover:bg-button-color hover:text-black-color hover:rounded-xl">
                  New
                </div>
              </Link>
            </div>
            <div>
              <div className="p-4 hover:bg-button-color hover:text-black-color hover:rounded-xl" onClick={handleClick}>
                Logout
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <AvatarComp size={"big"} name="Sanskar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appbar;
