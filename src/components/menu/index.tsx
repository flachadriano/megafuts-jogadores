import { AppBar, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export function Menu() {
  return (
    <AppBar>
      <Container sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Typography variant="h6" noWrap component="a" href="#" >
            Megafuts - análise de jogadores | 
          </Typography>
        <Link to={`/meus-jogadores`}>Meus jogadores</Link>
        -<Link to={`/import`}>Importar dados</Link>
        -<Link to={`/analize`}>Analisar jogadores</Link>
      </Container>
    </AppBar>
  )
}