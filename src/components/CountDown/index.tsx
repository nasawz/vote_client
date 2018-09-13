import * as React from 'react';

export interface CountDownProps {
  time: any;
  children?: any;
}

export default class CountDown extends React.Component<CountDownProps, any> {
  public render() {
    let { time, children } = this.props;
    return (
      <ul className="Header__card Header__apply-wrap">
        <span className="Header__icon-style">
          <span
            className="k-i-time-o Header__time-pic"
            style={{
              color: 'rgb(57, 150, 246)'
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
