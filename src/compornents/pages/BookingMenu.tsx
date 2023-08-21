import { FC, memo, useEffect, useState } from "react"
import { DataGrid, GridRowsProp, GridColDef, jaJP } from '@mui/x-data-grid';
import { HeaderParts } from '../template/Header';
import { PrimaryButton } from '../button/PrimaryButton';

const columns: GridColDef[] = [
  { field: 'id',
   headerName: '予約ID',
    width: 180,
    renderCell:(params) =>(
    <><a href={"/booking_detail?id="+ params.value}>{params.value}</a> </>
    )
   },
  { field: 'status', headerName: 'ステータス', width: 180 },
  { field: 'date', headerName: '予約日', width: 180 },
  { field: 'agency', headerName: '代理店', width: 180 },
  { field: 'name', headerName: 'お名前', width: 180 },
  { field: 'tel', headerName: '電話番号', width: 180 },
  { field: 'driver', headerName: '担当ドライバー', width: 180 },
];

type Data = {
  id: string,
  status: string,
  date: Date,
  agency: string,
  name: string,
  tel: string,
  driver: string
};

export const BookingMenu: FC = memo(() => {
  // stateの作成
  const [reservationList, setReservationList] = useState<Data[]>([])

  // 予約情報一覧の取得
  useEffect( () =>{
    fetch("https://taxi-dummy-api.vercel.app/api/reservation/getReservationList", {
      method: "GET"
    })
    .then((response) => response.json())
      .then((data) => {
        // ここでデータを加工して格納
        const list:Data[] = data.map((info) => {
          return({
            id: info.id,
            status: info.status,
            date: new Date(info.date),
            agency: info.agency,
            name: info.name,
            tel: info.tel,
            driver: info.driver
          })
        })
        setReservationList(list)
      });
  },[]);
  
  return (
    <>
      <HeaderParts />
      <div className="container">
      <div className="main-ttl">
          <h1>予約一覧</h1>
        </div>
        <div style={{  width: '1260px',margin:'auto',background:'#fff' }}>
          <DataGrid 
          rows={reservationList}
          columns={columns}
          localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
          
           />
        </div>
        <PrimaryButton href="/booking_edit">新規予約登録</PrimaryButton>
       
        
      </div>
    </>
  );
})