import { FC, memo, useEffect, useState } from "react"
import { Button, TextField, TextareaAutosize } from '@mui/material';
import { HeaderParts } from '../template/Header';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { PrimaryButton } from "../button/PrimaryButton";
import dayjs, { Dayjs } from "dayjs";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";



export const BookingEdit: FC = memo(() => {
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
  const [timeError, setTimeError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (time < 1 || time > 24) {
      setTimeError(true);
    } else {
      setTimeError(false);
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
  }, [shop]); 

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
  }, [shop]); 

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
  }, [shop]); 

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
  }, [shop]); 













  return (
    <>
      <HeaderParts />
      <div className="container">
        <div className="data-back">
          <a href="/booking_menu">＜保存せずに戻る</a>
        </div>
        <div className="main-ttl">
          <h1>新規予約作成</h1>
        </div>
        <div className="data-area">

          <div className="data-box">
            <div className="data-box-block -noline">
              <p className='data-box-block__ttl'>予約ID</p>
              <div className='data-box-block__cont flex'>
                <p className='data-box-block__cont-txt'>A094050</p>
                <p className='data-box-block__cont-status -finish'>完了</p>
              </div>
            </div>
            <div className="data-box-group -mt">
              <h2>代理店情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>代理店</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'><TextField
                    maxRows={1}
                    value={shop}
                    placeholder="xxx株式会社"
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setshop(event.target.value);
                    }}
                    error={shopError}
                    helperText={
                      shopError
                        ? "店名を入力してください。"
                        : null
                    }
                  /></p>
                  <p className='data-box-block__cont-txt -mt -flex'><TextField
                    maxRows={1}
                    value={shopname}
                    placeholder="田中　太郎"
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setshopname(event.target.value);
                    }}
                    error={shopnameError}
                    helperText={
                      shopnameError
                        ? "代表者名を入力してください。"
                        : null
                    }
                  /><span className='fwb'>様</span></p>
                </div>
              </div>
            </div>
            <div className="data-box-group -mt">
              <h2>お客様情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>お名前</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt -flex'><TextField
                    maxRows={1}
                    value={name}
                    placeholder="田中　太郎"
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setName(event.target.value);
                    }}
                    error={nameError}
                    helperText={
                      nameError
                        ? "入力必須です。"
                        : null
                    }
                  /><span className='fwb'>様</span></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>電話番号</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'><TextField
                    maxRows={1}
                    value={tel}
                    placeholder="000-0000-0000"
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setTel(event.target.value);
                    }}
                    error={telError}
                    helperText={
                      telError
                        ? "半角で電話番号を入力してください。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>メールアドレス</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'><TextField
                    maxRows={1}
                    placeholder="xxx@co.jp"
                    value={mail}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setMail(event.target.value);
                    }}
                    error={mailError}
                    helperText={
                      mailError
                        ? "Email アドレスの形式が正しくないようです。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>乗車人数</p>
                <div className='data-box-block__cont flex'>
                  <div className="data-box-block__cont-ttl">
                    <div className='data-box-block__cont-txt -list'>
                      <p className='-ttl fwb'>合計</p>
                      <span className='fwb -num'><TextField
                    maxRows={1}
                    value={numberOfPeople}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setNumberOfPeople(event.target.value);
                    }}
                    error={numberOfPeopleError}
                    helperText={
                      numberOfPeopleError
                        ? "数値で入力ください。"
                        : null
                    }
                  /></span>
                      <span className='fwb'>人</span>
                    </div>
                  </div>
                  <div className="data-box-block__cont-list">
                    <div className="-contwrap flex">
                      <p className='-ttl fwb'>大人</p>
                      <p className='-num fwb -flex'><TextField
                    maxRows={1}
                    value={numberOfAdult}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setNumberOfAdult(event.target.value);
                    }}
                    error={numberOfAdultError}
                    helperText={
                      numberOfAdultError
                        ? "数値で入力ください。"
                        : null
                    }
                  /><span className='fwb'>人</span></p>
                    </div>
                    <div className="-contwrap flex">
                      <p className='-ttl fwb'>小人</p>
                      <p className='-num fwb -flex'><TextField
                    maxRows={1}
                    value={numberOfchild}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setNumberOfchild(event.target.value);
                    }}
                    error={numberOfchildError}
                    helperText={
                      numberOfchildError
                        ? "数値で入力ください。"
                        : null
                    }
                  /><span className='fwb'>人</span></p>
                    </div>
                    <div className="-contwrap flex">
                      <p className='-ttl fwb'>幼児</p>
                      <p className='-num fwb -flex'><TextField
                    maxRows={1}
                    value={numberOfbaby}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setNumberOfbaby(event.target.value);
                    }}
                    error={numberOfbabyError}
                    helperText={
                      numberOfbabyError
                        ? "数値で入力ください。"
                        : null
                    }
                  /><span className='fwb'>人</span></p>
                    </div>
                    <div className="-contwrap flex">
                      <p className='-ttl fwb'>添乗員</p>
                      <p className='-num fwb -flex'><TextField
                    maxRows={1}
                    value={numberOfguide}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setNumberOfguide(event.target.value);
                    }}
                    error={numberOfguideError}
                    helperText={
                      numberOfguideError
                        ? "数値で入力ください。"
                        : null
                    }
                  /><span className='fwb'>人</span></p>
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
                  <p className='data-box-block__cont-txt'><TextField
                    maxRows={1}
                    value={couse}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setcouse(event.target.value);
                    }}
                    error={couseError}
                    helperText={
                      couseError
                        ? "入力必須です。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>ご乗車日</p>
                <div className='data-box-block__cont'>
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
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>迎え時間</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'><TextField id="pick-uptime" variant="outlined" type="time" /></p>
                </div>
              </div>
              <div className="data-box-block">
              <div>
              <p className='data-box-block__ttl'>利用希望時間</p>
                    <br />
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
                  </div>

              </div>
             
              <div className="data-box-block">
                <p className='data-box-block__ttl'>迎え場所</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'><TextField
                    maxRows={1}
                    value={startPoint}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setStartPoint(event.target.value);
                    }}
                    error={startPointError}
                    helperText={
                      startPointError
                        ? "入力必須です。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>便名</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'><TextField
                    maxRows={1}
                    value={flight}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setflight(event.target.value);
                    }}
                    error={flightError}
                    helperText={
                      flightError
                        ? "フライト名を入力してください。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>運行会社</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'><TextField
                    maxRows={1}
                    value={company}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setcompany(event.target.value);
                    }}
                    error={companyError}
                    helperText={
                      companyError
                        ? "運行会社を入力してください。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>無線番号</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'><TextField
                    maxRows={1}
                    value={wireless}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setwireless(event.target.value);
                    }}
                    error={wirelessError}
                    helperText={
                      wirelessError
                        ? "入力必須です。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>車種名</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'><TextField
                    maxRows={1}
                    value={car}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setcar(event.target.value);
                    }}
                    error={carError}
                    helperText={
                      carError
                        ? "入力必須です。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>社員名</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'><TextField
                    maxRows={1}
                    value={employee}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setemployee(event.target.value);
                    }}
                    error={employeeError}
                    helperText={
                      employeeError
                        ? "入力必須です。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>メモ</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt data-box-block__cont-txt-w100'><TextField
                    rows={4}
                    multiline
                    value={others}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setothers(event.target.value);
                    }}
                    error={othersError}
                    helperText={
                      othersError
                        ? "入力必須です。"
                        : null
                    }
                  /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton>保存</PrimaryButton>


      </div>






    </>

  )
});