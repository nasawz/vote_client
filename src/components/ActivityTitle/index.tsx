import * as React from 'react';

export interface ActivityTitleProps {
  title;
}

export default class ActivityTitle extends React.Component<ActivityTitleProps, any> {
  public render() {
    let { title } = this.props;
    return (
      <ul>
        <li className="Header__title">{title}</li>
      </ul>
    );
  }
}
