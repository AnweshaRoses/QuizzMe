
import './App.css';
import {createBrowserRouter, RouterProvider,useLocation} from 'react-router-dom'
import { Root } from './components/Root';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import Login from './components/Login';


const router=createBrowserRouter([
  {
    path:'/',
    element:<Login></Login>
  },  
{
  path:'/start',
  element:<Root></Root>
},
{
  path:'/quiz',
  element:<Quiz></Quiz>
},
{
  path:'/result',
  element:<Result></Result>
},
])
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
