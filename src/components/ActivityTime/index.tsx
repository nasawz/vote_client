import * as React from 'react';
import dateFormater from '../../utils/dateFormater';

export interface ActivityTimeProps {
  join_start;
  join_end;
  date_start;
  date_end;
}

export default class ActivityTime extends React.Component<ActivityTimeProps, any> {
  public render() {
    let { join_start, join_end, date_start, date_end } = this.props;
    let opus_time: any = {
      starttime: dateFormater(join_start).format('yyyy-MM-dd HH:mm'),
      endtime: dateFormater(join_end).format('yyyy-MM-dd HH:mm')
    };
    let vote_time: any = {
      starttime: dateFormater(date_start).format('yyyy-MM-dd HH:mm'),
      endtime: dateFormater(date_end).format('yyyy-MM-dd HH:mm')
    };
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
              {vote_time.starttime} 至 {vote_time.endtime}
            </span>
          </span>
        </li>
      </ul>
    );
  }
}
