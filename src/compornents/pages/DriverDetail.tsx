import { FC,  useEffect,  useState } from "react"
import { HeaderParts } from '../template/Header';
import { PrimaryButton } from "../button/PrimaryButton";
import { useLocation } from 'react-router-dom';
import { TextField } from "@mui/material";

type Data = {
  id: string,
  name: string,
  tel: string,
};


export const DriverDetail: FC = () => {
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
  const telPattern = new RegExp(/^0[-\d]{9,12}$/);
  useEffect(() => {
    if (isFirstRendering) {
      setIsFirstRendering(false);
      return;
    }
    if (newTel.length < 1) {
      setnewTelError(true);
    } else if (!telPattern.test(newTel)) {
      setnewTelError(true);
    } else {
      setnewTelError(false);
    }
  }, [newTel]); 



  // stateの作成
  const [driverInfo, setDriverInfo] = useState<Data|null>();

  // 編集ステートの作成
  const [isEditing, setIsEditing] = useState(false);

  // ドライバー詳細情報の取得
  const query = new URLSearchParams(useLocation().search);// クエリパラメーターの取得
  useEffect(() => {
    // Fetch先のURL合成
    const url = "https://taxi-dummy-api.vercel.app/api/car/getCarInfo?id=" + query.get('id')
    fetch(url, {
      method: "GET",
    })
    .then((response) => response.json())
      .then((data) => {
        setDriverInfo(data as Data);
        console.log(data);
      });
  }, []);

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
          <a href="/driver_menu">＜ドライバー一覧へ戻る</a>
        </div>

        <div className="data-area">
          <div className="data-box">
            <div className="data-box-group">
              <h2>ドライバー情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>ドライバーID</p>
                <div className='data-box-block__cont'>
                {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={driverInfo?.id}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setnewDriver(event.target.value);
                        // 同時に更新
                        setDriverInfo(prev => prev ? { ...prev, id: event.target.value } : null)
                      }}
                      error={newDriverError}
                      helperText={
                        newDriverError
                          ? "IDを入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{driverInfo?.id}</p>
                  )}
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>お名前</p>
                <div className='data-box-block__cont'>
                {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={driverInfo?.name}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setnewName(event.target.value);
                        // 同時に更新
                        setDriverInfo(prev => prev ? { ...prev, name: event.target.value } : null)
                      }}
                      error={newNameError}
                      helperText={
                        newNameError
                          ? "名前を入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{driverInfo?.name}</p>
                  )}
                  
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>電話番号</p>
                <div className='data-box-block__cont'>
                {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={driverInfo?.tel}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setnewTel(event.target.value);
                        // 同時に更新
                        setDriverInfo(prev => prev ? { ...prev, tel: event.target.value } : null)
                      }}
                      error={newTelError}
                      helperText={
                        newTelError
                          ? "半角数字で入力してください"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{driverInfo?.tel}</p>
                  )}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton
          onClick={() => onClick()}
          disabled={isEditing && (newDriverError || newNameError || newTelError)}
        >
          {isEditing ? '保存する' : '編集する'}
        </PrimaryButton>
      </div>






    </>

  )
};