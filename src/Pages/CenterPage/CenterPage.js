import React, { Component } from 'react';
import WINESLIDE from './CenterData';
import './CenterPage.scss';

class CenterPage extends Component {
  state = {
    num: 0,
    banner: 0,
    x: 0,
    centerPageData: [],
  };

  componentDidMount() {
    // setInterval(() => {
    //   const { num } = this.state;
    //   this.setState({ num: num + 1 > 3 ? 0 : num + 1 });
    // }, 3000);

    // setInterval(() => {
    //   const { banner } = this.state;
    //   this.setState({ banner: banner + 1 > 1 ? 0 : banner + 1 });
    // }, 2000);

    fetch('http://localhost:3000/data/TodayHotDeal.json')
      .then(response => response.json())
      .then(response => {
        this.setState({
          centerPageData: response,
        });
      });
  }

  goToText = e => {
    console.log(this.goToText);
    this.props.history.push(`/center/${e}`);
  };

  nextButton = () => {
    const { x } = this.state;

    this.setState({ x: x - 300 }, () => {
      console.log(this.state.x);
    });
  };

  beforeButton = () => {
    const { x } = this.state;

    this.setState({ x: x + 300 }, () => {
      console.log(this.state.x);
    });
  };

  render() {
    console.log(this.nextButton);
    const { num, banner } = this.state;

    return (
      <section className="centerPage">
        <div
          className="slideBox"
          style={{ backgroundImage: `url("${WINESLIDE[num].img}")` }}
        />
        <div className="centerBox">
          <div className="centerText">행복가득 기획전</div>
          <div className="happyExhivition">
            {HAPPYIMG.map((happy, key) => {
              return (
                <div className="exhibition" key={key}>
                  <img
                    className="happyBox"
                    src={happy.img}
                    alt="happyExhivition"
                  />
                  <div
                    className="happyBoxTopText"
                    onClick={() => this.goToText(happy.name)}
                  >
                    {happy.name}
                  </div>
                  <div className="happyBoxBottomText">{happy.pick}</div>
                </div>
              );
            })}
          </div>
          <div
            className="centerBanner"
            style={{ backgroundImage: `url("${BANNERIMG[banner]}")` }}
          />
          <div className="todayHotDeal">
            <div className="todayHotDealText">오늘의 핫딜!</div>
            <div className="todayHotDealInfo">
              <div className="todayHotDealImgBox">
                {this.state.centerPageData.map((centerData, key) => {
                  return (
                    <div
                      className="todayHotDealImg"
                      style={{ backgroundImage: `url('${centerData.img}')` }}
                    />
                  );
                })}
              </div>

              <div className="arrowBox">
                <i class="fas fa-arrow-left" onClick={this.beforeButton} />
                <i class="fas fa-arrow-right" onClick={this.nextButton} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CenterPage;

const HAPPYIMG = [
  {
    id: 1,
    img: './Images/Center/happy1.jpg',
    name: 'Europe',
    pick: 'MD 추천',
  },
  {
    id: 2,
    img: './Images/Center/happy2.jpg',
    name: 'America',
    pick: 'MD 추천',
  },
  {
    id: 3,
    img: './Images/Center/happy3.jpg',
    name: 'Asia',
    pick: 'MD 추천',
  },
];
const BANNERIMG = [
  './Images/Center/banner1.jpg',
  './Images/Center/banner2.jpg',
];
