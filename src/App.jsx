import { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CreatePoll from "./pages/CreatePoll";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "./slices/authSlice";
import UpdatePoll from "./pages/UpdatePoll";

// Lazy load the components
const Navbar = lazy(() => import("./components/Navbar"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Polls = lazy(() => import("./pages/Polls"));
const Poll = lazy(() => import("./pages/Poll"));

function App() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const userInfo = await localStorage.getItem("userInfo");
        if (userInfo !== null) {
          dispatch(setCredentials(JSON.parse(userInfo)));
        }
      } catch (error) {
        console.error("Error loading user info from LocalStorage", error);
      }
    };

    loadUserInfo();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public route for Polls */}
            <Route path="/polls" element={<Polls />} />
            <Route path="/polls/:pollId" element={<Poll />} />
            <Route path="/polls/update-poll/:id" element={<UpdatePoll />} />
            <Route path="/create-poll" element={<CreatePoll />} />

            {/* Conditional routes for Login and Register */}
            <Route
              path="/login"
              element={!userInfo ? <Login /> : <Navigate to="/polls" />}
            />
            <Route
              path="/register"
              element={!userInfo ? <Register /> : <Navigate to="/polls" />}
            />
            <Route
              path="/create-poll"
              element={!userInfo ? <Login /> : <Navigate to="/create-poll" />}
            />

            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/polls" />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
