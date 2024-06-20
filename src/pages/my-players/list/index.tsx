import { DataGrid, GridColDef, GridRowModel } from '@mui/x-data-grid';
import { Player } from '../../../models/Player';
import Percent from './percent';
import Position from './position';
import { Skill } from '../../../components/skill';

const sortByNumber = (v1: string, v2: string) => Number.parseInt(v1) - Number.parseInt(v2);

const skillBase = { width: 52, sortComparator: sortByNumber };

interface ListType {
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

export default function List({ players, setPlayers }: ListType) {

  const onClickPosition = (_position: string, row: GridRowModel<Player>) => {
    const mutatingPlayers = [ ...players ];
    const selectedIndex = mutatingPlayers.findIndex(p => p.Camisa == row.Camisa);
    const selectedPlayer = mutatingPlayers[selectedIndex];
    eval("selectedPlayer[_position] = selectedPlayer[_position] == 'True' ? 'False' : 'True'");
    mutatingPlayers[selectedIndex] = selectedPlayer;
    setPlayers(mutatingPlayers);
  }

  const columns: GridColDef[] = [
    { field: 'Camisa', headerName: '#', width: 50, sortComparator: sortByNumber },
    { field: 'Titulo', headerName: 'Nome', width: 200 },
    { field: 'Salario', headerName: 'Salário', width: 120 },
    { field: 'Idade', headerName: 'Idade', width: 60 },
    { field: 'IndiceVelocidade', headerName: 'VEL', renderCell: (params) => <Skill indice={params.row.IndiceVelocidade} high={params.row.PotencialAltoVelocidade} low={params.row.PotencialBaixoVelocidade} maxed={params.row.MaximizadoVelocidade} />, ...skillBase },
    { field: 'IndiceResistencia', headerName: 'RES', renderCell: (params) => <Skill indice={params.row.IndiceResistencia} high={params.row.PotencialAltoResistencia} low={params.row.PotencialBaixoResistencia} maxed={params.row.MaximizadoResistencia} />, ...skillBase },
    { field: 'IndiceInteligencia', headerName: 'INT', renderCell: (params) => <Skill indice={params.row.IndiceInteligencia} high={params.row.PotencialAltoInteligencia} low={params.row.PotencialBaixoInteligencia} maxed={params.row.MaximizadoInteligencia} />, ...skillBase },
    { field: 'IndicePasse', headerName: 'PSC', renderCell: (params) => <Skill indice={params.row.IndicePasse} high={params.row.PotencialAltoPasse} low={params.row.PotencialBaixoPasse} maxed={params.row.MaximizadoPasse} />, ...skillBase },
    { field: 'IndicePasseLongo', headerName: 'PSL', renderCell: (params) => <Skill indice={params.row.IndicePasseLongo} high={params.row.PotencialAltoPasseLongo} low={params.row.PotencialBaixoPasseLongo} maxed={params.row.MaximizadoPasseLongo} />, ...skillBase },
    { field: 'IndiceControleBola', headerName: 'CTB', renderCell: (params) => <Skill indice={params.row.IndiceControleBola} high={params.row.PotencialAltoControleBola} low={params.row.PotencialBaixoControleBola} maxed={params.row.MaximizadoControleBola} /> , ...skillBase },
    { field: 'IndiceAgressividade', headerName: 'AGR', renderCell: (params) => <Skill indice={params.row.IndiceAgressividade} high={params.row.PotencialAltoAgressividade} low={params.row.PotencialBaixoAgressividade} maxed={params.row.MaximizadoAgressividade} />, ...skillBase },
    { field: 'IndiceDesarme', headerName: 'DES', renderCell: (params) => <Skill indice={params.row.IndiceDesarme} high={params.row.PotencialAltoDesarme} low={params.row.PotencialBaixoDesarme} maxed={params.row.MaximizadoDesarme} />, ...skillBase },
    { field: 'IndiceChute', headerName: 'CHU', renderCell: (params) => <Skill indice={params.row.IndiceChute} high={params.row.PotencialAltoChute} low={params.row.PotencialBaixoChute} maxed={params.row.MaximizadoChute} />, ...skillBase },
    { field: 'IndiceDefesaGol', headerName: 'DFG', renderCell: (params) => <Skill indice={params.row.IndiceDefesaGol} high={params.row.PotencialAltoDefesaGol} low={params.row.PotencialBaixoDefesaGol} maxed={params.row.MaximizadoDefesaGol} /> , ...skillBase },
    { field: 'IndiceForma', headerName: 'FRM', ...skillBase },
    { field: 'IndiceExperiencia', headerName: 'EXP', ...skillBase },
    { field: 'OverallTomadaDecisao', headerName: 'TD%', width: 52, sortable: false, renderCell: (c) => <Percent val1={c.row.OverallTomadaDecisaoCerta} val2={c.row.OverallTomadaDecisaoErrada} /> },
    { field: 'OverallChute', headerName: 'CHT', ...skillBase },
    { field: 'OverallDefesa', headerName: 'DFG', ...skillBase },
    { field: 'OverallRecepcao', headerName: 'RCP', ...skillBase },
    { field: 'OverallDesarme', headerName: 'DES', ...skillBase },
    { field: 'pc-percent', headerName: 'PC%', width: 53, sortable: false, renderCell: (c) => <Percent val1={c.row.OverallPasseCurtoCerto} val2={c.row.OverallPasseCurtoErrado} /> },
    { field: 'pl-percent', headerName: 'PL%', width: 52, sortable: false, renderCell: (c) => <Percent val1={c.row.OverallPasseLongoCerto} val2={c.row.OverallPasseLongoErrado} /> },
    { field: 'Goleiro', headerName: 'Gol', width: 50, renderCell: (d) => <Position attribute='Goleiro' row={d.row} onClickPosition={onClickPosition} /> },
    { field: 'Zagueiro', headerName: 'Zag', width: 50, renderCell: (d) => <Position attribute='Zagueiro' row={d.row} onClickPosition={onClickPosition} /> },
    { field: 'Meia', headerName: 'MC', width: 50, renderCell: (d) => <Position attribute='Meia' row={d.row} onClickPosition={onClickPosition} /> },
    { field: 'Atacante', headerName: 'Ata', width: 50, renderCell: (d) => <Position attribute='Atacante' row={d.row} onClickPosition={onClickPosition} /> },
  ];

  return (
    <div style={{ minHeight: 400, backgroundColor: '#fff' }}>
      <DataGrid
        autoHeight={true}
        autoPageSize={true}
        disableColumnMenu={true}
        columns={columns}
        rows={players}
        getRowId={(row) => row.Contador}
      />
    </div>
  );
}
