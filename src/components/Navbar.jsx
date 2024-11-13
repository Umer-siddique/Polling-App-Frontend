import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  console.log("UserInfo", userInfo);
  return (
    <header className="bg-violet-600">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-6">
        <a href="/polls">
          <h2 className="text-white text-3xl font-semibold">Polling App</h2>
        </a>

        {!userInfo ? (
          <ul className="flex items-center gap-6">
            <li className="border-2 border-white rounded-md px-4 py-1 bg-white text-sm">
              <a href="/login">Login</a>
            </li>

            <li className="border-2 border-white rounded-md px-4 py-1 hover:bg-white hover:transition-all">
              <a
                href="/register"
                className="text-white text-sm hover:text-black"
              >
                Register
              </a>
            </li>
          </ul>
        ) : (
          <div className="flex items-center gap-6">
            <button
              className="border-2 border-white rounded-md px-4 py-1 bg-white text-sm"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>

            <div className="border-2 border-white rounded-full h-10 w-10 flex justify-center items-center">
              <strong href="/register" className="text-white text-sm">
                {userInfo?.data?.user?.username.split(" ")[0][0]}
              </strong>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
