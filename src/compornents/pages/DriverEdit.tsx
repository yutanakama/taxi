import { FC, memo, useEffect, useState } from "react"
import { TextField, TextareaAutosize } from '@mui/material';
import { HeaderParts } from '../template/Header';
import { PrimaryButton } from "../button/PrimaryButton";



export const DriverEdit: FC = memo(() => {
  const [isFirstRendering, setIsFirstRendering] = useState<boolean>(true);
  // // ドライバーID
  const [newDriver, setnewDriver] = useState<string>("");
  const [newDriverError, setnewDriverError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (newDriver.length < 1) {
      setnewDriverError(true);
    } else {
      setnewDriverError(false);
    }
  }, [newDriver]); 

  // // お名前
  const [newName, setnewName] = useState<string>("");
  const [newNameError, setnewNameError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (newName.length < 1) {
      setnewNameError(true);
    } else {
      setnewNameError(false);
    }
  }, [newName]); 

  // // 電話番号
  const [newTel, setnewTel] = useState<string>("");
  const [newTelError, setnewTelError] = useState<boolean>(false);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (newTel.length < 1) {
      setnewTelError(true);
    } else {
      setnewTelError(false);
    }
  }, [newTel]); 


  return (
    <>
      <HeaderParts />
      <div className="container">
        <div className="data-back">
          <a href="/driver_menu">＜保存せずに戻る</a>
        </div>

        <div className="main-ttl">
          <h1>新規ドライバー登録</h1>
        </div>

        <div className="data-area">

          <div className="data-box">
            <div className="data-box-group -mt">
              <h2>ドライバー情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>ドライバーID</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt -flex'><TextField
                    maxRows={1}
                    value={newDriver}
                    placeholder="AO000000"
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setnewDriver(event.target.value);
                    }}
                    error={newDriverError}
                    helperText={
                      newDriverError
                        ? "IDを入力してください。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>お名前</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt -flex'><TextField
                    maxRows={1}
                    value={newName}
                    placeholder="山田太郎"
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setnewName(event.target.value);
                    }}
                    error={newNameError}
                    helperText={
                      newNameError
                        ? "名前を入力してください。"
                        : null
                    }
                  /></p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>電話番号</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt -flex'><TextField
                    maxRows={1}
                    value={newTel}
                    placeholder="000-0000-0000"
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setnewTel(event.target.value);
                    }}
                    error={newTelError}
                    helperText={
                      newTelError
                        ? "電話番号を入力してください。"
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