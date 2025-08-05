import React from "react";
import useTheme from "../hook/useTheme";
import { FiMoon, FiSunrise } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { FaPowerOff } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLogout } from "../hook/useLoagout";
function Header() {
  const { user } = useSelector((store) => store.user);
  const changeTheme = useTheme();2
  const auth = getAuth();
  const dispatch = useDispatch()
  function handleLogout() {
    signOut(auth)
      .then(() => {
        dispatch(logout()); 
        localStorage.removeItem("token"); 
        navigate("/login"); 
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  }

  const {isPending, logout}= useLogout()
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar align-elements">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Goat</a>
        </div>
        <div className="navbar-end">
        {user?.displayName && (
    <div className="font-semibold text-base">{user.displayName}</div>
  )}
  <img
    src={user?.photoURL}
    alt={user?.displayName || "User Avatar"}
    width={40}
    height={40}
    className="rounded-full object-cover"
  />
  <button onClick={logout} className="btn btn-outline btn-sm mr-5"><FaPowerOff /></button>


          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={changeTheme}
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon   className="swap-off h-10 w-10 fill-current" */}
            <FiSunrise className="swap-on h-8 w-8 fill-current" />

            {/* moon icon */}
            <FiMoon className="swap-off h-8 w-8 fill-current" />
          </label>

          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
