import { FC, useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { HeaderParts } from '../template/Header';
import { PrimaryButton } from "../button/PrimaryButton";
import { useLocation } from 'react-router-dom';
import { Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";





type Data = {
  id: string,
  status: string,
  agency: string,
  agencyManager: string,
  customerName: string,
  customerTel: string,
  customerMail: string,
  numberOfCustomer: {
    adult: number,
    child: number,
    baby: number,
    staff: number
  },
  course: string,
  timeStamp: string,
  utilizationTime: string,
  pickUpPlace: string,
  flightNo: string,
  branch: string,
  radioNo: string,
  carModel: string,
  driver: string,
  memo: string
};

export const BookingDetail: FC = () => {
  // 入力値制限用の定数
  let EARY_RESERVE_DATE: Date = new Date();
  EARY_RESERVE_DATE.setDate(EARY_RESERVE_DATE.getDate() + 3); // 最短3日後 
  const MAX_TIME = 8; // 最大利用時間
  const [isFirstRendering, setIsFirstRendering] = useState<boolean>(true);
  // // 代理店名
  const [shop, setshop] = useState<string>("");
  const [shopError, setshopError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (shop.length < 1) {
      setshopError(true);
    } else {
      setshopError(false);
    }
  }, [shop]);
  // // 代理店代表者名
  const [shopname, setshopname] = useState<string>("");
  const [shopnameError, setshopnameError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (shopname.length < 1) {
      setshopnameError(true);
    } else {
      setshopnameError(false);
    }
  }, [shopname]);
  //電話番号
  const [tel, setTel] = useState<string>("");
  const [telError, setTelError] = useState<boolean>(false);
  const telPattern = new RegExp(/^0[-\d]{9,12}$/);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (tel.length < 1) {
      setTelError(true);
    } else if (!telPattern.test(tel)) {
      setTelError(true);
    } else {
      setTelError(false);
    }
  }, [tel]);
  // // 名前
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (name.length < 1) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }, [name]);
  // // メールアドレス
  const [mail, setMail] = useState<string>("");
  const [mailError, setMailError] = useState<boolean>(false);
  const mailPattern = new RegExp(
    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-][a-zA-Z0-9].)+[a-zA-Z]{2,}$/
  );
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (mail.length < 1) {
      setMailError(true);
    } else if (!mailPattern.test(mail)) {
      setMailError(true);
    } else {
      setMailError(false);
    }
  }, [mail]);

  // // 乗車人数（合計）
  const [numberOfPeople, setNumberOfPeople] = useState<string>("");
  const [numberOfPeopleError, setNumberOfPeopleError] =
    useState<boolean>(false);
  const numberOfPeoplePattern = new RegExp(/^[1-9]([0-9]+)?$/);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (!numberOfPeoplePattern.test(numberOfPeople)) {
      setNumberOfPeopleError(true);
    } else {
      setNumberOfPeopleError(false);
    }
  }, [numberOfPeople]);

  // // 乗車人数（大人）
  const [numberOfAdult, setNumberOfAdult] = useState<string>("");
  const [numberOfAdultError, setNumberOfAdultError] =
    useState<boolean>(false);
  const numberOfAdultPattern = new RegExp(/^[1-9]([0-9]+)?$/);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (!numberOfAdultPattern.test(numberOfAdult)) {
      setNumberOfAdultError(true);
    } else {
      setNumberOfAdultError(false);
    }
  }, [numberOfAdult]);

  // // 乗車人数（小人）
  const [numberOfchild, setNumberOfchild] = useState<string>("");
  const [numberOfchildError, setNumberOfchildError] =
    useState<boolean>(false);
  const numberOfchildPattern = new RegExp(/^[1-9]([0-9]+)?$/);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (!numberOfchildPattern.test(numberOfchild)) {
      setNumberOfchildError(true);
    } else {
      setNumberOfchildError(false);
    }
  }, [numberOfchild]);

  // // 乗車人数（幼児）
  const [numberOfbaby, setNumberOfbaby] = useState<string>("");
  const [numberOfbabyError, setNumberOfbabyError] =
    useState<boolean>(false);
  const numberOfbabyPattern = new RegExp(/^[1-9]([0-9]+)?$/);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (!numberOfbabyPattern.test(numberOfbaby)) {
      setNumberOfbabyError(true);
    } else {
      setNumberOfbabyError(false);
    }
  }, [numberOfbaby]);

  // // 乗車人数（添乗員）
  const [numberOfguide, setNumberOfguide] = useState<string>("");
  const [numberOfguideError, setNumberOfguideError] =
    useState<boolean>(false);
  const numberOfguidePattern = new RegExp(/^[1-9]([0-9]+)?$/);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (!numberOfguidePattern.test(numberOfguide)) {
      setNumberOfguideError(true);
    } else {
      setNumberOfguideError(false);
    }
  }, [numberOfguide]);

  // // コース名
  const [couse, setcouse] = useState<string>("");
  const [couseError, setcouseError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (couse.length < 1) {
      setcouseError(true);
    } else {
      setcouseError(false);
    }
  }, [couse]);

  /// 乗車日
  const [date, setDate] = useState<Dayjs>(dayjs(EARY_RESERVE_DATE));

  //迎え時間
  const [timeValue, setTimeValue] = useState<string>("");
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
  }, [timeValue]);


  // // 乗車場所
  const [startPoint, setStartPoint] = useState<string>("");
  const [startPointError, setStartPointError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (startPoint.length < 1) {
      setStartPointError(true);
    } else {
      setStartPointError(false);
    }
  }, [startPoint]);

  // // 利用希望時間
  const [time, setTime] = useState<number>(1);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
  }, [time]);

  // // 便名
  const [flight, setflight] = useState<string>("");
  const [flightError, setflightError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (flight.length < 1) {
      setflightError(true);
    } else {
      setflightError(false);
    }
  }, [flight]);

  // // 運行会社
  const [company, setcompany] = useState<string>("");
  const [companyError, setcompanyError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (company.length < 1) {
      setcompanyError(true);
    } else {
      setcompanyError(false);
    }
  }, [company]);

  // // 無線番号
  const [wireless, setwireless] = useState<string>("");
  const [wirelessError, setwirelessError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (wireless.length < 1) {
      setwirelessError(true);
    } else {
      setwirelessError(false);
    }
  }, [wireless]);

  // // 車種名
  const [car, setcar] = useState<string>("");
  const [carError, setcarError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (car.length < 1) {
      setcarError(true);
    } else {
      setcarError(false);
    }
  }, [car]);

  // // 社員名
  const [employee, setemployee] = useState<string>("");
  const [employeeError, setemployeeError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (employee.length < 1) {
      setemployeeError(true);
    } else {
      setemployeeError(false);
    }
  }, [employee]);

  // // メモ
  const [others, setothers] = useState<string>("");
  const [othersError, setothersError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (others.length < 1) {
      setothersError(true);
    } else {
      setothersError(false);
    }
  }, [others]);


  // stateの作成
  const [reservationInfo, setReservationInfo] = useState<Data | null>();

  // 編集ステートの作成
  const [isEditing, setIsEditing] = useState(false);

  //日付を0000/00/00形式に変更
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // UNIXタイムスタンプをミリ秒に変換
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため+1し、2桁になるよう0を追加
    const day = String(date.getDate()).padStart(2, '0'); // 日を2桁になるよう0を追加

    return `${year}/${month}/${day}`;
  }


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
        const formattedDate = formatDate(data.timeStamp);
        setReservationInfo({
          ...data as Data, timeStamp: formattedDate
        });
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

  // 編集ボタン、保存ボタン押下時の挙動
  const onClick = () => {
    if (!isEditing) {
      setIsEditing(true)
    } else {
      // Fetchしてresを確認
      setIsEditing(false)
    }
  }




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
                <p className={`data-box-block__cont-status ${
                  reservationInfo?.status === '未着手' ? '-yet' :
                  reservationInfo?.status === '予約確定' ? '-pending' :
                  reservationInfo?.status === '完了' ? '-finish' :
                  reservationInfo?.status === 'メール確認待ち' ? '-confirm' :
                  reservationInfo?.status === 'キャンセル' ? '-cancel' : ''
                }`}>{reservationInfo?.status}</p>
              </div>
            </div>
            <div className="data-box-group -mt">
              <h2>代理店情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>代理店</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.agency}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setshop(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, agency: event.target.value } : null)
                      }}
                      error={shopError}
                      helperText={
                        shopError
                          ? "店名を入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.agency}</p>
                  )}
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.agencyManager}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setshopname(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, agencyManager: event.target.value } : null)
                      }}
                      error={shopnameError}
                      helperText={
                        shopnameError
                          ? "代表者名を入力してください。"
                          : null
                      }
                    /><span className='fwb'>様</span></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.agencyManager}<span className='fwb'>様</span></p>
                  )}
                </div>
              </div>

            </div>
            <div className="data-box-group -mt">
              <h2>お客様情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>お名前</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.customerName}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setName(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, customerName: event.target.value } : null)
                      }}
                      error={nameError}
                      helperText={
                        nameError
                          ? "入力必須です。"
                          : null
                      }
                    /><span className='fwb'>様</span></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.customerName}<span className='fwb'>様</span></p>
                  )}
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>電話番号</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.customerTel}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setTel(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, customerTel: event.target.value } : null)
                      }}
                      error={telError}
                      helperText={
                        telError
                          ? "半角数字で入力してください"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.customerTel}</p>
                  )}
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>メールアドレス</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.customerMail}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setMail(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, customerMail: event.target.value } : null)
                      }}
                      error={mailError}
                      helperText={
                        mailError
                          ? "Email アドレスの形式が正しくないようです。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.customerMail}</p>
                  )}

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
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.course}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setcouse(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, course: event.target.value } : null)
                      }}
                      error={couseError}
                      helperText={
                        couseError
                          ? "入力必須です。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.course}</p>
                  )}

                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>ご乗車日</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={date}
                        onChange={(newValue) => {
                          if (newValue) {
                            setDate(newValue);
                          }
                        }}
                        minDate={dayjs(EARY_RESERVE_DATE)}
                      />
                    </LocalizationProvider></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.timeStamp}</p>
                  )}

                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>迎え時間</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'>
                      <TextField
                        id="pick-uptime"
                        variant="outlined" 
                        type="time"
                        value={reservationInfo?.utilizationTime}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          setTimeValue(event.target.value);
                          // 同時に更新
                          setReservationInfo(prev => prev ? { ...prev, utilizationTime: event.target.value } : null)
                        }}
                         />
                    </p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.utilizationTime}</p>
                  )}

                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>利用時間</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <div className="data-box-block__btn">
                      <Button
                        onClick={() => {
                          if (time > 1) {
                            setTime((prev) => prev - 1);
                          }
                        }}
                      >
                        <KeyboardArrowLeftIcon />
                      </Button>
                      <div>{time}</div>
                      <Button
                        onClick={() => {
                          if (time < MAX_TIME) {
                            setTime((prev) => prev + 1);
                          }
                        }}
                      >
                        <KeyboardArrowRightIcon />
                      </Button>
                      <div>時間</div>
                      <br />
                      <div>　　※最大{MAX_TIME}時間</div>
                    </div>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.utilizationTime}<span className='fwb'>時間</span></p>
                  )}

                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>迎え場所</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.pickUpPlace}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setStartPoint(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, pickUpPlace: event.target.value } : null)
                      }}
                      error={startPointError}
                      helperText={
                        startPointError
                          ? "入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.pickUpPlace}</p>
                  )}

                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>便名</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.flightNo}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setflight(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, flightNo: event.target.value } : null)
                      }}
                      error={flightError}
                      helperText={
                        flightError
                          ? "入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.flightNo}</p>
                  )}

                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>運行会社</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.branch}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setcompany(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, branch: event.target.value } : null)
                      }}
                      error={companyError}
                      helperText={
                        companyError
                          ? "入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.branch}</p>
                  )}
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>無線番号</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.radioNo}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setwireless(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, radioNo: event.target.value } : null)
                      }}
                      error={wirelessError}
                      helperText={
                        wirelessError
                          ? "入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.radioNo}</p>
                  )}
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>車種名</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.carModel}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setcar(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, carModel: event.target.value } : null)
                      }}
                      error={carError}
                      helperText={
                        carError
                          ? "入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.carModel}</p>
                  )}

                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>社員名</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={reservationInfo?.driver}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setemployee(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, driver: event.target.value } : null)
                      }}
                      error={employeeError}
                      helperText={
                        employeeError
                          ? "入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.driver}</p>
                  )}

                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>メモ</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt data-box-block__cont-txt-w100'><TextField
                      rows={4}
                      multiline
                      value={reservationInfo?.memo}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setothers(event.target.value);
                        // 同時に更新
                        setReservationInfo(prev => prev ? { ...prev, memo: event.target.value } : null)
                      }}
                      error={othersError}
                      helperText={
                        othersError
                          ? "入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{reservationInfo?.memo}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton
          onClick={() => onClick()}
          disabled={isEditing && (shopError || shopnameError || telError || nameError || mailError || couseError || startPointError || flightError || companyError || wirelessError || carError || employeeError || othersError)}
        >
          {isEditing ? '保存する' : '編集する'}
        </PrimaryButton>


        {!isEditing && (
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
        )};


      </div>







    </>

  )
};