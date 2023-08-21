import { FC, memo } from "react"
import { DataGrid, GridRowsProp, GridColDef,jaJP } from '@mui/x-data-grid';
import { HeaderParts } from '../template/Header';
import { PrimaryButton } from '../button/PrimaryButton';

const rows: GridRowsProp = [
  { id: 1, col1: 'A094050', col2: '山田太郎', col3: '000-1111-1111'},
  { id: 2, col1: 'A094051', col2: '中田太郎', col3: '000-2222-2222'},
  { id: 3, col1: 'A094052', col2: '金城太郎', col3: '000-3333-3333'},
  { id: 4, col1: 'A094053', col2: '比嘉太郎', col3: '000-4444-4444'},
  { id: 5, col1: 'A094054', col2: '大城太郎', col3: '000-5555-5555'},
  { id: 6, col1: 'A094054', col2: '大城太郎', col3: '000-6666-6666'},
  { id: 7, col1: 'A094054', col2: '大城太郎', col3: '000-7777-7777'},
  { id: 8, col1: 'A094054', col2: '大城太郎', col3: '000-8888-8888'},
  { id: 9, col1: 'A094054', col2: '大城太郎', col3: '000-9999-9999'},
  { id:10, col1: 'A094054', col2: '大城太郎', col3: '000-0000-0000'},
 
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'ドライバーID', width: 420 },
  { field: 'col2', headerName: 'お名前', width: 420 },
  { field: 'col3', headerName: '電話番号', width: 420 },
];


export const DriverMenu: FC = memo(() => {
  return (
    <>
      <HeaderParts />
      <div className="container">
      <div className="main-ttl">
          <h1>ドライバー登録一覧</h1>
        </div>
        <div style={{  width: '1260px',margin:'auto',background:'#fff' }}>
          <DataGrid
          rows={rows}
          columns={columns}
          localeText={jaJP.components.MuiDataGrid.defaultProps.localeText} />
        </div>
        <PrimaryButton href="/driver_edit">新規ドライバー登録</PrimaryButton>
      </div>
    </>
  );
})