import { Box, Button, FormLabel, Input, Modal, TextareaAutosize, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Player } from "../../models/Player";
import { useClubManager } from "../../store/ClubManagerStore";

interface ImportType {
  tag: string;
  getData: (data: Player[]) => void;
  openImport: boolean;
  setOpenImport: (value: boolean) => void;
}

export function Import({ tag, getData, openImport, setOpenImport }: ImportType) {
  const [ season, setSeason ] = useState('');
  const [ day, setDay ] = useState('');
  const [ playersData, setPlayersData ] = useState('');
  const clubManager = useClubManager();

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPlayersData(event.target.value);
  }
  
  const executeImport = () => {
    if (!season || !day) {
      alert('Preencha temporada e dia da temporada');
    } else if (!playersData) {
      alert('Faltou informar os dados dos jogadores');
    } else {
      try {
        const players = JSON.parse(playersData).Dados;
        localStorage.setItem(tag, playersData);
        getData(players);
  
        const player: Player = players[0];
        clubManager.insertOrUpdateClub(player.Clube||'', player.ClubeUrlAmigavel||'');
  
        setOpenImport(false);
      } catch {
        console.log('failed to import');
      }
    }
  }

  return (
    <Modal open={openImport} onClose={() => setOpenImport(false)} >
      <Box sx={{
            position: 'absolute',
            top: '250px',
            left: '400px',
            transform: 'translate(-50%, -50%)',
            width: 400,
            p: 4,
            backgroundColor: '#555',
          }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Importar jogadores
        </Typography>
        <FormLabel>Temporada</FormLabel>
        <Input onChange={evt => setSeason(evt.target.value)} /><br />
        <FormLabel>Dia da temporada</FormLabel>
        <Input onChange={evt => setDay(evt.target.value)} />
        <Button onClick={executeImport}>Executar importação</Button>
        <TextareaAutosize style={{ width: '100%' }} minRows={10} maxRows={20} onChange={onChange} />
      </Box>
    </Modal>
  )
}
