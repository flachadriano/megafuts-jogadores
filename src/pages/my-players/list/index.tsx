import { DataGrid, GridColDef, GridRowModel } from '@mui/x-data-grid';
import { Player } from '../../../models/Player';
import Percent from './percent';
import Position from './position';

const sortByNumber = (v1: string, v2: string) => Number.parseInt(v1) - Number.parseInt(v2);

const skillBase = { width: 52, sortComparator: sortByNumber };

interface ListType {
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

export default function List({ players, setPlayers }: ListType) {

  const onClickPosition = (position: string, row: GridRowModel<Player>) => {
    const mutatingPlayers = [ ...players ];
    const selectedIndex = mutatingPlayers.findIndex(p => p.Camisa == row.Camisa);
    const selectedPlayer = mutatingPlayers[selectedIndex];
    eval("selectedPlayer[position] = selectedPlayer[position] == 'True' ? 'False' : 'True'");
    mutatingPlayers[selectedIndex] = selectedPlayer;
    setPlayers(mutatingPlayers);
  }

  const columns: GridColDef[] = [
    { field: 'Camisa', headerName: '#', width: 50, sortComparator: sortByNumber },
    { field: 'Titulo', headerName: 'Nome', width: 200 },
    { field: 'Salario', headerName: 'Salário', width: 120 },
    { field: 'Idade', headerName: 'Idade', width: 60 },
    { field: 'IndiceVelocidade', headerName: 'VEL', ...skillBase },
    { field: 'IndiceResistencia', headerName: 'RES', ...skillBase },
    { field: 'IndiceInteligencia', headerName: 'INT', ...skillBase },
    { field: 'IndicePasse', headerName: 'PSC', ...skillBase },
    { field: 'IndicePasseLongo', headerName: 'PSL', ...skillBase },
    { field: 'IndiceControleBola', headerName: 'CTB', ...skillBase },
    { field: 'IndiceAgressividade', headerName: 'AGR', ...skillBase },
    { field: 'IndiceDesarme', headerName: 'DES', ...skillBase },
    { field: 'IndiceChute', headerName: 'CHU', ...skillBase },
    { field: 'IndiceDefesaGol', headerName: 'DFG', ...skillBase },
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
