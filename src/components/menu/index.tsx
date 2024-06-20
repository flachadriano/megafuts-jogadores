import { AppBar, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { MyPlayers } from "../../pages/my-players"
import Market from "../../pages/market"
import { useClubManager } from "../../store/ClubManagerStore"

interface OptionType {
  [key: string]: { url: string, label: string, render: () => JSX.Element }
}

export const OPTIONS: OptionType = {
  myplayers: { url: '/meus-jogadores', label: 'Meus jogadores', render: () => <div style={{ display: 'flex' }}><Menu /><MyPlayers /></div> },
  market: { url: '/mercado', label: 'Mercado', render: () => <div style={{ display: 'flex' }}><Menu /><Market /></div> },
}

export function Menu() {
  const clubManer = useClubManager();

  return (
    <AppBar>
      <Container sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Typography variant="h6" noWrap component="a" href="#" >
            Megafuts - análise de jogadores
          </Typography>
          <Typography style={{ fontWeight: 'bold' }} variant="h6" noWrap component="a" href="#" >
            { clubManer.clubManager.clubs.length ? clubManer.clubManager.clubs[0].name : '' }
          </Typography>
          <Typography variant="h6" noWrap component="a" href="#" >
            | 
          </Typography>
          { Object.keys(OPTIONS).map((key, index) => <Link key={index} to={OPTIONS[key].url}>{ OPTIONS[key].label }</Link>) }
      </Container>
    </AppBar>
  )
}