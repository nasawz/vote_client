import * as React from 'react';

export interface CountDownProps {
  children?: any;
  primary_color;
  date_end;
}

export default class CountDown extends React.Component<CountDownProps, any> {
  timer;
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
  }
  getLeftTime(date_end) {
    let t = date_end - Date.now();
    if (t > 0) {
      let day = Math.floor(t / (24 * 3600 * 1000));
      let leave1 = t % (24 * 3600 * 1000);
      let hours = Math.floor(leave1 / (3600 * 1000));
      let leave2 = leave1 % (3600 * 1000);
      let minutes = Math.floor(leave2 / (60 * 1000));
      let leave3 = leave2 % (60 * 1000);
      let seconds = Math.round(leave3 / 1000);
      return `${day}天 ${hours}:${minutes}:${seconds}`;
    } else {
      clearInterval(this.timer);
      return '活动已结束';
    }
  }
  componentDidMount() {
    let { date_end } = this.props;
    this.timer = setInterval(() => {
      this.setState({ time: this.getLeftTime(date_end) });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  public render() {
    let { children, primary_color } = this.props;
    let { time } = this.state;
    return (
      <ul className="Header__card Header__apply-wrap">
        <span className="Header__icon-style">
          <span
            className="k-i-time-o Header__time-pic"
            style={{
              color: primary_color
            }}
          />
        </span>
        <span className="Header__label-name">距离结束</span>
        <span className="Header__count-down"> {time}</span>
        {children}
      </ul>
    );
  }
}
