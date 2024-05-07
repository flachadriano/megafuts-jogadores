import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Analize } from './pages/analize'
import { Importer } from './pages/importer'

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <div /> },
    { path: "/import", element: <Importer /> },
    { path: "/analize", element: <Analize /> },
  ]);

  return (
    <>
      <h1>Megafuts - análise de jogadores</h1>
      <ul>
        <li><a href='/import'>Importar dados</a></li>
        <li><a href='/analize'>Analisar jogadores</a></li>
      </ul>
      <RouterProvider router={router} />
    </>
  )
}

export default App
