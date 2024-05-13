import { Box, Button, Modal, TextareaAutosize, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Player } from "../../../models/Player";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ImportType {
  getData: (data: Player[]) => void;
  openImport: boolean;
  setOpenImport: (value: boolean) => void;
}

export function Import({ getData, openImport, setOpenImport }: ImportType) {
  const [ playersData, setPlayersData ] = useState('');

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPlayersData(event.target.value);
  }
  
  const executeImport = () => {
    getData(JSON.parse(playersData).Dados);
    setOpenImport(false);
  }

  return (
    <Modal open={openImport} onClose={() => setOpenImport(false)} >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Importar jogadores
        </Typography>
        <Button onClick={executeImport}>Executar importação</Button>
        <TextareaAutosize style={{ width: '100%' }} minRows={10} maxRows={20} onChange={onChange} />
      </Box>
    </Modal>

  )
}