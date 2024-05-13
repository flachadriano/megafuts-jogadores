import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Import } from "./import";

export function MyPlayers() {
  const [ openImport, setOpenImport ] = useState(false);
  const [ playersData, setPlayersData ] = useState('');

  return (
    <Box sx={{ margin: '20px' }}>
      <Button onClick={() => setOpenImport(true)}>Importar jogadores</Button>
      <Import openImport={openImport} setOpenImport={setOpenImport} getData={setPlayersData} />
    </Box>
  )
}