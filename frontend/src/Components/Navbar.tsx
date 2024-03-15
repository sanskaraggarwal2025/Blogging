const Navbar = () => {
  return (
    <>
      <div className="flex h-full justify-between bg-black-color text-white border-b-2">
        <div className="flex flex-col justify-center">
          <div className="font-extrabold text-4xl p-8">Let's Blog</div>
        </div>
        <div className="flex flex-col justify-center w-64">
          <div className="flex justify-around">
            <div className="hover:bg-button-color hover:text-black-color hover:rounded-xl">
              <div className="p-4">Sign In</div>
            </div>
            <div className="hover:bg-button-color hover:text-black-color hover:rounded-xl">
              <div className="p-4">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
