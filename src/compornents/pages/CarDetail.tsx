import { FC, useEffect, useState } from "react"
import { HeaderParts } from '../template/Header';
import { PrimaryButton } from "../button/PrimaryButton";
import { useLocation } from 'react-router-dom';
import { TextField } from "@mui/material";

type Data = {
  id: string,
  carModel: string,
  radioNo: string,
};

export const CarDetail: FC = () => {
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

  // stateの作成
  const [carInfo, setCarInfo] = useState<Data | null>();

  // 編集ステートの作成
  const [isEditing, setIsEditing] = useState(false);

  // 車種詳細情報の取得
  const query = new URLSearchParams(useLocation().search);// クエリパラメーターの取得
  useEffect(() => {
    // Fetch先のURL合成
    const url = "https://taxi-dummy-api.vercel.app/api/driver/getDriverInfo?id=" + query.get('id')
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setCarInfo(data as Data);
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
          <a href="/car_menu">＜車種一覧へ戻る</a>
        </div>

        <div className="data-area">

          <div className="data-box">


            <div className="data-box-group -mt">
              <h2>車種情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>ID</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={carInfo?.id}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setnewCarid(event.target.value);
                        // 同時に更新
                        setCarInfo(prev => prev ? { ...prev, id: event.target.value } : null)
                      }}
                      error={newcaridError}
                      helperText={
                        newcaridError
                          ? "IDを入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{carInfo?.id}</p>
                  )}
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>無線番号</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={carInfo?.radioNo}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setnewwireless(event.target.value);
                        // 同時に更新
                        setCarInfo(prev => prev ? { ...prev, radioNo: event.target.value } : null)
                      }}
                      error={newwirelessError}
                      helperText={
                        newwirelessError
                          ? "無線番号を入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{carInfo?.radioNo}</p>
                  )}
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>車種</p>
                <div className='data-box-block__cont'>
                  {isEditing ? (
                    <p className='data-box-block__cont-txt'><TextField
                      maxRows={1}
                      value={carInfo?.carModel}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setnewCar(event.target.value);
                        // 同時に更新
                        setCarInfo(prev => prev ? { ...prev, carModel: event.target.value } : null)
                      }}
                      error={newCarError}
                      helperText={
                        newCarError
                          ? "車種名を入力してください。"
                          : null
                      }
                    /></p>
                  ) : (
                    <p className='data-box-block__cont-txt'>{carInfo?.carModel}</p>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
        <PrimaryButton
          onClick={() => onClick()}
          disabled={isEditing && (newcaridError || newwirelessError || newCarError)}
        >
          {isEditing ? '保存する' : '編集する'}
        </PrimaryButton>




      </div>






    </>

  )
};