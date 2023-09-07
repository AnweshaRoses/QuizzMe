
import './App.css';
import {createBrowserRouter, RouterProvider,useLocation} from 'react-router-dom'
import { Root } from './components/Root';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import Navbar from './components/Navbar';

const router=createBrowserRouter([
{
  path:'/',
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
