import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

import { ProtecRoutest } from "./components";
import { useSelector } from "react-redux";

import { Home, Login, Profile, Signup, SingleImage } from "./Pages";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { useDispatch } from "react-redux";
import { login, authReady } from "./app/features/userSlice";

function App() {
  const dispatch = useDispatch();
  const { user, isAuthReady } = useSelector((state) => state.user);
  

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtecRoutest user={user}>
          <MainLayout />
        </ProtecRoutest>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/singleImage",
          element: <SingleImage />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  onAuthStateChanged(auth, (user) => {
    dispatch(login(user));
   dispatch(authReady())
  });
  return<> {isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;
