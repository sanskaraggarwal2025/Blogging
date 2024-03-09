import AuthRight from "../Components/AuthRight";
import AuthLeft from "../Components/AuthLeft";
const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
          <AuthLeft type="signin" />
      <div className="hidden lg:block">
        <AuthRight />
      </div>
    </div>
  )
}

export default Signin