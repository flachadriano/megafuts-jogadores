import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Player } from "../../models/Player";
import List from "./list";
import { Import } from "../../components/import";

export function MyPlayers() {
  const tag = 'my-players';
  const [ openImport, setOpenImport ] = useState(false);
  const [ playersData, setPlayersData ] = useState<Player[]>([]);

  if (!playersData.length) {
    const data = localStorage.getItem(tag);
    if (data) {
      setPlayersData(JSON.parse(data).Dados);
    }
  }

  return (
    <Box sx={{ display: 'flex', margin: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Button onClick={() => setOpenImport(true)}>Importar jogadores</Button>
        <List players={playersData} setPlayers={setPlayersData} />
      </Box>
      <Import tag={tag} openImport={openImport} setOpenImport={setOpenImport} getData={setPlayersData} />
    </Box>
  )
}