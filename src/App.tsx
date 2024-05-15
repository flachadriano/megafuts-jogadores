import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Analize } from './pages/analize'
import { Importer } from './pages/importer'
import { useState } from 'react';
import { Player } from './models/Player';
import { Menu } from './components/menu';
import { MyPlayers } from './pages/my-players';

function App() {
  const [ players, setPlayers ] = useState<Player[]>([]);

  const router = createBrowserRouter([
    { path: "/", element: <Menu /> },
    { path: "/meus-jogadores", element: <div style={{ display: 'flex' }}><Menu /><MyPlayers /></div> },
    { path: "/import", element: <><Menu /><Importer setPlayers={setPlayers} /></> },
    { path: "/analize", element: <><Menu /><Analize players={players} /></> },
  ]);

  return (<RouterProvider router={router} />)
}

export default App
