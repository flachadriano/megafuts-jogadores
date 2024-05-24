import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Player } from '../../../models/Player';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import { Skill } from '../../../components/skill';

const sortByNumber = (v1: string, v2: string) => Number.parseInt(v1) - Number.parseInt(v2);

const columns: GridColDef[] = [
  { field: 'Camisa', headerName: '#', width: 50, sortComparator: sortByNumber },
  { field: 'Titulo', headerName: 'Nome', width: 200 },
  { field: 'Salario', headerName: 'Salário', width: 120 },
  { field: 'IndiceVelocidade', headerName: 'VEL', width: 50, sortComparator: sortByNumber, renderCell: (params) => <Skill indice={params.row.IndiceVelocidade} high={params.row.PotencialAltoVelocidade} low={params.row.PotencialBaixoVelocidade} maxed={params.row.MaximizadoVelocidade} /> },
  { field: 'IndiceResistencia', headerName: 'RES', width: 50, sortComparator: sortByNumber, renderCell: (params) => <Skill indice={params.row.IndiceResistencia} high={params.row.PotencialAltoResistencia} low={params.row.PotencialBaixoResistencia} maxed={params.row.MaximizadoResistencia} /> },
  { field: 'IndiceInteligencia', headerName: 'INT', width: 50, sortComparator: sortByNumber, renderCell: (params) => <Skill indice={params.row.IndiceInteligencia} high={params.row.PotencialAltoInteligencia} low={params.row.PotencialBaixoInteligencia} maxed={params.row.MaximizadoInteligencia} /> },
  { field: 'IndicePasse', headerName: 'PSC', width: 50, sortComparator: sortByNumber, renderCell: (params) => <Skill indice={params.row.IndicePasse} high={params.row.PotencialAltoPasse} low={params.row.PotencialBaixoPasse} maxed={params.row.MaximizadoPasse} /> },
  { field: 'IndicePasseLongo', headerName: 'PSL', width: 50, sortComparator: sortByNumber, renderCell: (params) => <Skill indice={params.row.IndicePasseLongo} high={params.row.PotencialAltoPasseLongo} low={params.row.PotencialBaixoPasseLongo} maxed={params.row.MaximizadoPasseLongo} /> },
  { field: 'IndiceControleBola', headerName: 'CTB', width: 50, sortComparator: sortByNumber, renderCell: (params) => <Skill indice={params.row.IndiceControleBola} high={params.row.PotencialAltoControleBola} low={params.row.PotencialBaixoControleBola} maxed={params.row.MaximizadoControleBola} /> },
  { field: 'IndiceAgressividade', headerName: 'AGR', width: 50, sortComparator: sortByNumber, renderCell: (params) => <Skill indice={params.row.IndiceAgressividade} high={params.row.PotencialAltoAgressividade} low={params.row.PotencialBaixoAgressividade} maxed={params.row.MaximizadoAgressividade} /> },
  { field: 'IndiceDesarme', headerName: 'DES', width: 50, sortComparator: sortByNumber, renderCell: (params) => <Skill indice={params.row.IndiceDesarme} high={params.row.PotencialAltoDesarme} low={params.row.PotencialBaixoDesarme} maxed={params.row.MaximizadoDesarme} /> },
  { field: 'IndiceChute', headerName: 'CHU', width: 50, sortComparator: sortByNumber, renderCell: (params) => <Skill indice={params.row.IndiceChute} high={params.row.PotencialAltoChute} low={params.row.PotencialBaixoChute} maxed={params.row.MaximizadoChute} /> },
  { field: 'IndiceDefesaGol', headerName: 'DFG', width: 50, sortComparator: sortByNumber, renderCell: (params) => <Skill indice={params.row.IndiceDefesaGol} high={params.row.PotencialAltoDefesaGol} low={params.row.PotencialBaixoDefesaGol} maxed={params.row.MaximizadoDefesaGol} /> },
  { field: 'ValorNegociacao', headerName: 'Lance', width: 120 },
];

interface ListType {
  players: Player[];
}

export default function List({ players }: ListType) {
  const [ onlyYoung, setOnlyYoung ] = useState(false);
  const [ atLeast8, setAtLeast8 ] = useState(false);

  const filteredPlayers = (list: Player[]) => {
    return list.filter(p => {
      return (onlyYoung ? Number.parseInt(p.Idade || '0') <= 19 : p)
        && (!atLeast8 || Number.parseInt(p.IndiceDesarme || '0') >= 8 || Number.parseInt(p.IndiceChute || '0') >= 8 || Number.parseInt(p.IndiceDefesaGol || '0') >= 8)
    })
  }

  return (
    <div>
      <div>
        <h2>Filtros</h2>
        <Checkbox sx={{ color: '#fff' }} onChange={(event) => setOnlyYoung(event.target.checked)} />Juvenil
        <br/>
        <Checkbox sx={{ color: '#fff' }} onChange={(event) => setAtLeast8(event.target.checked)} />Pelo menos 8 em Desarme ou Chute ou Defesa
      </div>
      <div style={{ minHeight: 400, backgroundColor: '#fff' }}>
        <DataGrid
          columns={columns}
          rows={filteredPlayers(players)}
          getRowId={(row) => row.Contador}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 30 } } }}
          pageSizeOptions={[30, 50, 100]}
          />
      </div>
    </div>
  );
}