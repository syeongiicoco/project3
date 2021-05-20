import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './Scroll.scss';

class Scroll extends Component {
  render() {
    return (
      <aside className="container">
        <div className="scrollBox">
          <div className="couponBox">
            <div className="coupon">
              이달의
              <br />
              쿠폰
            </div>
            <div className="sidebar">상품후기</div>
            <div className="sidebar">입점신청</div>
            <div className="sidebar">찜한상품</div>
            <div className="sidebar">장바구니</div>
          </div>
          <div className="sidebarLast">
            <div className="smallSidebar">최근본상품</div>
          </div>
          <div className="sidebarBtn">
            <i class="fas fa-chevron-up" />
            <i class="fas fa-chevron-down" />
          </div>
          <div className="homeBtn">
            <i class="fas fa-home" />
            <p className="iconName">HOME</p>
          </div>
        </div>
      </aside>
    );
  }
}

export default Scroll;
