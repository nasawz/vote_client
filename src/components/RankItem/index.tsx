import * as React from 'react';

export interface RankBtnProps {
  activity: any;
  rank: any;
  goInfo;
}

export default class RankBtn extends React.Component<RankBtnProps, any> {
  goInfo() {
    let { rank } = this.props;
    this.props.goInfo(rank);
  }
  renderRankNum() {
    let { activity, rank } = this.props;
    if (rank.rank == 1) {
      return <img src="/assets/images/rank_1.png" />;
    }
    if (rank.rank == 2) {
      return <img src="/assets/images/rank_2.png" />;
    }
    if (rank.rank == 3) {
      return <img src="/assets/images/rank_3.png" />;
    }
    return (
      <div
        className="Charts__circle"
        style={{
          backgroundColor: activity.primary_color
        }}
      >
        <span className="Charts__number">{rank.rank}</span>
      </div>
    );
  }
  public render() {
    let { activity, rank } = this.props;
    if (!rank) return <div />;
    return (
      <li onClick={this.goInfo.bind(this)}>
        {this.renderRankNum()}
        <p className="Charts__model-name Charts__model-name1">{rank.title}</p>
        <p
          className="Charts__model-num Charts__model-num1"
          style={{ color: activity.primary_color }}
        >
          {rank.score}
          <span className="Charts__ticket-unit">票</span>
        </p>
      </li>
    );
  }
}
