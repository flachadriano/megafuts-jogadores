import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Analize } from './pages/analize'
import { Importer } from './pages/importer'
import { useState } from 'react';
import { Player } from './models/Player';
import { Menu } from './components/menu';

function App() {
  const [ players, setPlayers ] = useState<Player[]>([]);

  console.log(players);
  
  const router = createBrowserRouter([
    { path: "/", element: <Menu /> },
    { path: "/import", element: <><Menu /><Importer setPlayers={setPlayers} /></> },
    { path: "/analize", element: <><Menu /><Analize players={players} /></> },
  ]);

  return (
    <>
      <h1>Megafuts - análise de jogadores</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
