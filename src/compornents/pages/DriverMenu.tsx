import { FC, memo, useEffect, useState } from "react"
import { DataGrid, GridRowsProp, GridColDef,jaJP } from '@mui/x-data-grid';
import { HeaderParts } from '../template/Header';
import { PrimaryButton } from '../button/PrimaryButton';

const columns: GridColDef[] = [
  { field: 'id',
   headerName: 'ドライバーID',
    width: 420,
    renderCell:(params) =>(
      <><a href={"/driver_detail?id="+ params.value}>{params.value}</a> </>
      ) },
  { field: 'name', headerName: 'お名前', width: 420 },
  { field: 'tel', headerName: '電話番号', width: 420 },
  
];

type Data = {
  id: string,
  name: string,
  tel: string,
  
};



export const DriverMenu: FC = memo(() => {
  // stateの作成
  const [driverList, setDriverList] = useState<Data[]>([])

   // ドライバー情報一覧の取得
   useEffect( () =>{
    fetch("https://taxi-dummy-api.vercel.app/api/car/getCarList", {
      method: "GET"
    })
    .then((response) => response.json())
      .then((data) => {
        // ここでデータを加工して格納
        const list:Data[] = data.map((info) => {
          return({
            id: info.id,
            name: info.name,
            tel:info.tel,
          })
        })
        setDriverList(list)
      });
  },[]);
  return (
    <>
      <HeaderParts />
      <div className="container">
      <div className="main-ttl">
          <h1>ドライバー登録一覧</h1>
        </div>
        <div style={{  width: '1260px',margin:'auto',background:'#fff' }}>
          <DataGrid
          rows={driverList}
          columns={columns}
          localeText={jaJP.components.MuiDataGrid.defaultProps.localeText} />
        </div>
        <PrimaryButton href="/driver_edit">新規ドライバー登録</PrimaryButton>
      </div>
    </>
  );
})