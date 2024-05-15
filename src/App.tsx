import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Menu, OPTIONS } from './components/menu';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Menu /> },
    ...Object.keys(OPTIONS).map(key => ({ path: OPTIONS[key].url, element: OPTIONS[key].render() }))
  ]);

  return (<RouterProvider router={router} />)
}

export default App
