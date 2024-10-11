import PostUpdateForm from "./components/PostUpdateForm";
import FullApp from "./screens/FullApp";
import Signup from "./screens/Signup";
import { Toaster } from "react-hot-toast";
import Profile from "./screens/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullApp />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post/:Id" element={<PostUpdateForm />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <Toaster />
    </Router >
  )
}

export default App
