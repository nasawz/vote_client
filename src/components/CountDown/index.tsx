import * as React from 'react';

export interface CountDownProps {
  children?: any;
  primary_color;
  date_end;
  join_start;
}

export default class CountDown extends React.Component<CountDownProps, any> {
  timer;
  timer_join;
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      timer_join: ''
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

  getNeedTime(join_start) {
    let t = join_start - Date.now();
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
      clearInterval(this.timer_join);
      return '活动已开始';
    }
  }

  componentDidMount() {
    let { date_end, join_start } = this.props;
    if (Date.now() < join_start) {
      this.timer_join = setInterval(() => {
        this.setState({ timer_join: this.getNeedTime(join_start) });
      }, 1000);
    }
    this.timer = setInterval(() => {
      this.setState({ time: this.getLeftTime(date_end) });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.timer_join);
  }

  public render() {
    let { children, primary_color, join_start } = this.props;
    let { time, timer_join } = this.state;
    let isStart = Date.now() > join_start;
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
        <span className="Header__label-name">{isStart ? '距离结束' : '距离开始'}</span>
        <span className="Header__count-down"> {isStart ? time : timer_join}</span>
        {children}
      </ul>
    );
  }
}
