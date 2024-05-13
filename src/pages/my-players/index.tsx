import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Import } from "./import";
import { Player } from "../../models/Player";
import { List } from "./list";

export function MyPlayers() {
  const [ openImport, setOpenImport ] = useState(false);
  const [ playersData, setPlayersData ] = useState<Player[]>([]);

  return (
    <Box sx={{ margin: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Button onClick={() => setOpenImport(true)}>Importar jogadores</Button>
        <List players={playersData} />
      </Box>
      <Import openImport={openImport} setOpenImport={setOpenImport} getData={setPlayersData} />
    </Box>
  )
}