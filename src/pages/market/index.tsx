import { useState } from "react";
import { Player } from "../../models/Player";
import { Box, Button } from "@mui/material";
import { Import } from "../../components/import";
import List from "./list";

export default function Market() {
  const tag = 'market';
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
        <List players={playersData} />
      </Box>
      <Import tag={tag} openImport={openImport} setOpenImport={setOpenImport} getData={setPlayersData} />
    </Box>
  )
}
