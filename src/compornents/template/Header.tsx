import { slide as Menu } from 'react-burger-menu'

export const HeaderParts = () => {
  return(
    <header>
    <h1><a href="/booking_menu">観光タクシー予約管理</a></h1>
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right>
        <main id="page-wrap">
          <div className="page-wrap-block">
            <div className="page-wrap-list">
              <a id="booking" className="menu-item" href="/booking_menu">予約管理</a>
              <a id="driver" className="menu-item" href="/driver_menu">ドライバー管理</a>
              <a id="car" className="menu-item" href="/car_menu">車両管理</a>
            </div>
            <div className="page-wrap-btn">
              <button>ログアウト</button>
            </div>
          </div>
        </main>
      </Menu>
    </div>
  </header>
  )

};