import * as React from 'react';

export interface RankBtnProps {
  activity: any;
  rank: any;
}

export default class RankBtn extends React.Component<RankBtnProps, any> {
  renderRankNum() {
    let { activity, rank } = this.props;
    if (rank.num == 1) {
      return <img src="assets/images/rank_1.png" />;
    }
    if (rank.num == 2) {
      return <img src="assets/images/rank_2.png" />;
    }
    if (rank.num == 3) {
      return <img src="assets/images/rank_3.png" />;
    }
    return (
      <div
        className="Charts__circle"
        style={{
          backgroundColor: activity.primary_color
        }}
      />
    );
  }
  public render() {
    let { activity, rank } = this.props;
    if (!rank) return <div />;
    return (
      <li>
        {this.renderRankNum()}
        <p className="Charts__model-name Charts__model-name1">aa</p>
        <p
          className="Charts__model-num Charts__model-num1"
          style={{ color: activity.primary_color }}
        >
          2<span className="Charts__ticket-unit">票</span>
        </p>
      </li>
    );
  }
}
