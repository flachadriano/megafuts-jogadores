import { Box } from "@mui/material";
import { Player } from "../../../models/Player"

interface ListType {
  players: Player[];
}

export function List({ players }: ListType) {
  return (
    <Box>
      {players.map(p => <span>{ p.Camisa }</span>)}
    </Box>
  )
}