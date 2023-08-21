import { FC, memo } from "react"
import { DataGrid, GridRowsProp, GridColDef,jaJP } from '@mui/x-data-grid';
import { HeaderParts } from '../template/Header';
import { PrimaryButton } from '../button/PrimaryButton';

const rows: GridRowsProp = [
  { id: 1, col1: 'A094050', col2: 'ホンダ'},
  { id: 1, col1: 'A094051', col2: 'トヨタ'},
  { id: 1, col1: 'A094052', col2: 'ホンダ'},
  { id: 1, col1: 'A094053', col2: 'スバル'},
  { id: 1, col1: 'A094054', col2: 'ホンダ'},
 
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: '無線番号', width: 630 },
  { field: 'col2', headerName: '車種名', width: 630 },
];


export const CarMenu: FC = memo(() => {
  return (
    <>
      <HeaderParts />
      <div className="container">
      <div className="main-ttl">
          <h1>車両登録一覧</h1>
        </div>
        <div style={{  width: '1260px',margin:'auto',background:'#fff' }}>
          <DataGrid
          rows={rows}
          columns={columns}
          localeText={jaJP.components.MuiDataGrid.defaultProps.localeText} />
        </div>
        <PrimaryButton href="/car_edit">新規車両登録</PrimaryButton>
      </div>
    </>
  );
})