import * as React from 'react';

export interface ActivityTimeProps {
  opus_time: any;
  vote_time: any;
}

export default class ActivityTime extends React.Component<ActivityTimeProps, any> {
  public render() {
    let { opus_time, vote_time } = this.props;
    return (
      <ul className="Header__card">
        <li>
          <span className="Header__label-name">报名时间： </span>
          <span>
            <span className="Header__label-content">
              {opus_time.starttime} 至 {opus_time.endtime}
            </span>
          </span>
        </li>
        <li>
          <span className="Header__label-name">投票时间： </span>
          <span>
            <span className="Header__label-content">
              {opus_time.starttime} 至 {opus_time.endtime}
            </span>
          </span>
        </li>
      </ul>
    );
  }
}
