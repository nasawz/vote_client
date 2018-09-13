import * as React from 'react';

export interface BannerProps {
  img;
}

export default class Banner extends React.Component<BannerProps, any> {
  public render() {
    let { img } = this.props;
    return (
      <ul className="Header__avatar-content">
        <img src={img} className="Header__avatar" />
      </ul>
    );
  }
}
