import { FC, useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { HeaderParts } from '../template/Header';
import { PrimaryButton } from "../button/PrimaryButton";
import { useLocation } from 'react-router-dom';

type Data = {
  id: string,
  status: string,
  agency:string,
  agencyManager:string,
  customerName: string,
  customerTel: string,
  customerMail: string,
  numberOfCustomer: {
    adult:number,
    child:number,
    baby:number,
    staff:number
  },
  course:string,
  timeStamp: string,
  utilizationTime:number,
  pickUpPlace:string,
  flightNo:string,
  branch:string,
  radioNo:string,
  carModel:string,
  driver: string,
  memo:string
};

export const BookingDetail: FC = () => {
  // stateの作成
  const [reservationInfo, setReservationInfo] = useState<Data|null>();

  // 予約詳細情報の取得
  const query = new URLSearchParams(useLocation().search);// クエリパラメーターの取得
  useEffect(() => {
    // Fetch先のURL合成
    const url = "https://taxi-dummy-api.vercel.app/api/reservation/getReservationInfo?id=" + query.get('id')
    fetch(url, {
      method: "GET",
    })
    .then((response) => response.json())
      .then((data) => {
        setReservationInfo(data as Data);
        console.log(data);
      });
  }, []);

  //乗車人数の合計
  const totalNumber = (
    (reservationInfo?.numberOfCustomer?.adult || 0) +
    (reservationInfo?.numberOfCustomer?.child || 0) +
    (reservationInfo?.numberOfCustomer?.baby || 0) +
    (reservationInfo?.numberOfCustomer?.staff || 0)
  );


  // 編集履歴のためのデータ成形
  function createData(
    day: string,
    editor: string,
    status: string,
  ) {
    return { day, editor, status };
  }
  const rows = [
    createData('2023/10/10', '仲間', '完了'),
    createData('2023/10/10', '仲間', '完了'),
    createData('2023/10/10', '仲間', '完了'),
    createData('2023/10/10', '仲間', '完了'),
    createData('2023/10/10', '仲間', '完了'),
  ];




  return (
    <>
      <HeaderParts />
      <div className="container">
        <div className="data-back">
          <a href="/booking_menu">＜予約一覧へ戻る</a>
        </div>

        <div className="data-area">

          <div className="data-box">
            <div className="data-box-block -noline">
              <p className='data-box-block__ttl'>予約ID</p>
              <div className='data-box-block__cont flex'>
                <p className='data-box-block__cont-txt'>{reservationInfo?.id}</p>
                <p className='data-box-block__cont-status -pending'>{reservationInfo?.status}</p>
                {/* <p className={text ? 'data-box-block__cont-status': 'data-box-block__cont-status -yet'  }>未着手</p> */}
                {/* <button onClick={() => {
                  settext((prev) => !prev);
                }}></button> */}
              </div>
            </div>
            <div className="data-box-group -mt">
              <h2>代理店情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>代理店</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.agency}</p>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.agencyManager}<span className='fwb'>様</span></p>
                </div>
              </div>
            </div>
            <div className="data-box-group -mt">
              <h2>お客様情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>お名前</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.customerName}<span className='fwb'>様</span></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>電話番号</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.customerTel}</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>メールアドレス</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.customerMail}</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>乗車人数</p>
                <div className='data-box-block__cont flex'>
                  <p className='data-box-block__cont-txt -mt'>合計<span className='fwb'>{totalNumber}</span>人</p>
                  <div className="data-box-block__cont-list">
                    <div className="-contwrap flex">
                      <p className='-ttl fwb'>大人</p>
                      <p className='-num fwb'><span className='fwb'>{reservationInfo?.numberOfCustomer.adult}</span>人</p>
                    </div>
                    <div className="-contwrap flex">
                      <p className='-ttl fwb'>小人</p>
                      <p className='-num fwb'><span className='fwb'>{reservationInfo?.numberOfCustomer.child}</span>人</p>
                    </div>
                    <div className="-contwrap flex">
                      <p className='-ttl fwb'>幼児</p>
                      <p className='-num fwb'><span className='fwb'>{reservationInfo?.numberOfCustomer.baby}</span>人</p>
                    </div>
                    <div className="-contwrap flex">
                      <p className='-ttl fwb'>添乗員</p>
                      <p className='-num fwb'><span className='fwb'>{reservationInfo?.numberOfCustomer.staff}</span>人</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-box-group -mt">
              <h2>ご予約詳細</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>コース名</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.course}</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>ご乗車日</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.timeStamp}</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>迎え時間</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>12:00</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>利用時間</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.utilizationTime}<span className='fwb'>時間</span></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>迎え場所</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.pickUpPlace}</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>便名</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.flightNo}</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>運行会社</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.branch}</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>無線番号</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.radioNo}</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>車種名</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.carModel}</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>社員名</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.driver}</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>メモ</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>{reservationInfo?.memo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton href="/booking_edit">編集する</PrimaryButton>

        <div className="history-data-box">
          <h2>編集履歴</h2>
          <TableContainer className='history-data-box__table' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>編集日</TableCell>
                  <TableCell>編集者</TableCell>
                  <TableCell>ステータス</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.day}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.day}
                    </TableCell>
                    <TableCell>{row.editor}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>


      </div>






    </>

  )
};