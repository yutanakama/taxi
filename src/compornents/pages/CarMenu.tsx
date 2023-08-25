import { FC, memo, useEffect, useState } from "react"
import { DataGrid, GridRowsProp, GridColDef,jaJP } from '@mui/x-data-grid';
import { HeaderParts } from '../template/Header';
import { PrimaryButton } from '../button/PrimaryButton';


const columns: GridColDef[] = [
  { field: 'id',
  headerName: '車ID',
   width: 420,
   renderCell:(params) =>(
     <><a href={"/car_detail?id="+ params.value}>{params.value}</a> </>
     ) },
 { field: 'carModel', headerName: '車モデル', width: 420 },
 { field: 'radioNo', headerName: '無線番号', width: 420 },
];


type Data = {
  id: string,
  carModel: string,
  radioNo: string,
};




export const CarMenu: FC = memo(() => {
   // stateの作成
   const [carList, setCarList] = useState<Data[]>([]);

   // ドライバー情報一覧の取得
   useEffect( () =>{
    fetch("https://taxi-dummy-api.vercel.app/api/driver/getDriverList", {
      method: "GET"
    })
    .then((response) => response.json())
      .then((data) => {
        // ここでデータを加工して格納
        const list:Data[] = data.map((info) => {
          return({
            id: info.id,
            carModel: info.carModel,
            radioNo:info.radioNo,
          })
        })
        setCarList(list)
      });
  },[]);

  return (
    <>
      <HeaderParts />
      <div className="container">
      <div className="main-ttl">
          <h1>車両登録一覧</h1>
        </div>
        <div style={{  width: '1260px',margin:'auto',background:'#fff' }}>
          <DataGrid
          rows={carList}
          columns={columns}
          localeText={jaJP.components.MuiDataGrid.defaultProps.localeText} />
        </div>
        <PrimaryButton href="/car_edit">新規車両登録</PrimaryButton>
      </div>
    </>
  );
})