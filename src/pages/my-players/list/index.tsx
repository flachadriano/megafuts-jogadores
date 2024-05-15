import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Player } from '../../../models/Player';
import Percent from './percent';

const sortByNumber = (v1: string, v2: string) => Number.parseInt(v1) - Number.parseInt(v2);

const columns: GridColDef[] = [
  { field: 'Camisa', headerName: '#', width: 50, sortComparator: sortByNumber },
  { field: 'Titulo', headerName: 'Nome', width: 200 },
  { field: 'Salario', headerName: 'Salário', width: 120 },
  { field: 'IndiceVelocidade', headerName: 'VEL', width: 50, sortComparator: sortByNumber },
  { field: 'IndiceResistencia', headerName: 'RES', width: 50, sortComparator: sortByNumber },
  { field: 'IndiceInteligencia', headerName: 'INT', width: 50, sortComparator: sortByNumber },
  { field: 'IndicePasse', headerName: 'PSC', width: 50, sortComparator: sortByNumber },
  { field: 'IndicePasseLongo', headerName: 'PSL', width: 50, sortComparator: sortByNumber },
  { field: 'IndiceControleBola', headerName: 'CTB', width: 50, sortComparator: sortByNumber },
  { field: 'IndiceAgressividade', headerName: 'AGR', width: 50, sortComparator: sortByNumber },
  { field: 'IndiceDesarme', headerName: 'DES', width: 50, sortComparator: sortByNumber },
  { field: 'IndiceChute', headerName: 'CHU', width: 50, sortComparator: sortByNumber },
  { field: 'IndiceDefesaGol', headerName: 'DFG', width: 50, sortComparator: sortByNumber },
  { field: 'IndiceForma', headerName: 'FRM', width: 50, sortComparator: sortByNumber },
  { field: 'IndiceExperiencia', headerName: 'EXP', width: 50, sortComparator: sortByNumber },
  { field: 'OverallTomadaDecisao', headerName: 'TD%', width: 50, sortable: false, renderCell: (c) => <Percent val1={c.row.OverallTomadaDecisaoCerta} val2={c.row.OverallTomadaDecisaoErrada} /> },
  { field: 'OverallChute', headerName: 'CHT', width: 55, sortComparator: sortByNumber },
  { field: 'OverallDefesa', headerName: 'DFG', width: 55, sortComparator: sortByNumber },
  { field: 'OverallRecepcao', headerName: 'RCP', width: 55, sortComparator: sortByNumber },
  { field: 'OverallDesarme', headerName: 'DES', width: 55, sortComparator: sortByNumber },
  { field: 'pc-percent', headerName: 'PC%', width: 50, sortable: false, renderCell: (c) => <Percent val1={c.row.OverallPasseCurtoCerto} val2={c.row.OverallPasseCurtoErrado} /> },
  { field: 'pl-percent', headerName: 'PL%', width: 50, sortable: false, renderCell: (c) => <Percent val1={c.row.OverallPasseLongoCerto} val2={c.row.OverallPasseLongoErrado} /> }
];

interface ListType {
  players: Player[];
}

export default function List({ players }: ListType) {
  return (
    <div style={{ minHeight: 400, backgroundColor: '#fff' }}>
      <DataGrid
        columns={columns}
        rows={players}
        getRowId={(row) => row.Contador}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 30 } } }}
        pageSizeOptions={[30, 50, 100]}
      />
    </div>
  );
}