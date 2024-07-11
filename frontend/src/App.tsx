import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Layout from './ui_components/Layout';
import Error from './pages/Error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/profile', element: <Profile/>},
      {path: '/edit-profile', element: <EditProfile/>},
      {path: '/sign-in', element: <SignIn/>},
      {path: '/sign-up', element: <SignUp/>}
    ],
    errorElement: <Error/>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
