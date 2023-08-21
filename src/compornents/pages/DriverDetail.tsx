import { FC, memo } from "react"
import { HeaderParts } from '../template/Header';
import { PrimaryButton } from "../button/PrimaryButton";


export const DriverDetail: FC = memo(() => {
 
  return (
    <>
     <HeaderParts />
      <div className="container">
        <div className="data-back">
          <a href="/manegement_menu">＜ドライバー一覧へ戻る</a>
        </div>

        <div className="data-area">
          <div className="data-box">
            <div className="data-box-group">
              <h2>ドライバー情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>ドライバーID</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>A000000</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>お名前</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>田中太郎</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>電話番号</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>000-0000-0000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton href="/driver_edit">編集する</PrimaryButton>
      </div>






    </>

  )
});