import { FC, memo, useEffect, useState } from "react"
import { TextField} from '@mui/material';
import { HeaderParts } from '../template/Header';
import { PrimaryButton } from "../button/PrimaryButton";



export const CarEdit: FC = memo(() => {
  const [isFirstRendering, setIsFirstRendering] = useState<boolean>(true);

  // // 車種ID
  const [newcarid, setnewCarid] = useState<string>("");
  const [newcaridError, setnewCaridError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (newcarid.length < 1) {
      setnewCaridError(true);
    } else {
      setnewCaridError(false);
    }
  }, [newcarid]); 
  // // 無線番号
  const [newwireless, setnewwireless] = useState<string>("");
  const [newwirelessError, setnewwirelessError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (newwireless.length < 1) {
      setnewwirelessError(true);
    } else {
      setnewwirelessError(false);
    }
  }, [newwireless]); 

  // // 車種名
  const [newCar, setnewCar] = useState<string>("");
  const [newCarError, setnewCarError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (newCar.length < 1) {
      setnewCarError(true);
    } else {
      setnewCarError(false);
    }
  }, [newCar]); 
  
  return (
    <>
    <HeaderParts />
      <div className="container">
        <div className="data-back">
          <a href="/car_menu">＜保存せずに戻る</a>
        </div>

        <div className="main-ttl">
          <h1>新規車種登録</h1>
        </div>

        <div className="data-area">

          <div className="data-box">
            <div className="data-box-group -mt">
              <h2>車種情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>車種ID</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt -flex'><TextField
                    maxRows={1}
                    value={newcarid}
                    placeholder="000000000"
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setnewCarid(event.target.value);
                    }}
                    error={newcaridError}
                    helperText={
                      newcaridError
                        ? "車種IDを入力してください。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>無線番号</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt -flex'><TextField
                    maxRows={1}
                    value={newwireless}
                    placeholder="000000000"
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setnewwireless(event.target.value);
                    }}
                    error={newwirelessError}
                    helperText={
                      newwirelessError
                        ? "無線番号を入力してください。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>車種名</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt -flex'><TextField
                    maxRows={1}
                    value={newCar}
                    placeholder="ホンダ"
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setnewCar(event.target.value);
                    }}
                    error={newCarError}
                    helperText={
                      newCarError
                        ? "車種名を入力してください。"
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