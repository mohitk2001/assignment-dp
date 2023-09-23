import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>,
  }
]);
function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
