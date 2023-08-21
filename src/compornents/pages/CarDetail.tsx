import { FC, memo } from "react"
import { HeaderParts } from '../template/Header';
import { PrimaryButton } from "../button/PrimaryButton";

export const CarDetail: FC = memo(() => {
 
  return (
    <>
     <HeaderParts />
      <div className="container">
        <div className="data-back">
          <a href="/manegement_menu">＜車種一覧へ戻る</a>
        </div>

        <div className="data-area">

          <div className="data-box">
            
            
            <div className="data-box-group -mt">
              <h2>車種情報</h2>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>無線番号</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>000</p>
                </div>
              </div>
              <div className="data-box-block">
                <p className='data-box-block__ttl'>車種</p>
                <div className='data-box-block__cont'>
                  <p className='data-box-block__cont-txt'>ホンダ</p>
                </div>
              </div>
            </div>
        
          </div>
        </div>
        <PrimaryButton href="/car_edit">編集する</PrimaryButton>

       
        

      </div>






    </>

  )
});