import * as React from 'react';

export interface RankBtnProps {
  hander_rank_btn: any;
}

export default class RankBtn extends React.Component<RankBtnProps, any> {
  public render() {
    let { hander_rank_btn } = this.props;
    return (
      <ul className="Header__card Header__to-ranking" onClick={hander_rank_btn}>
        <img src="/assets/images/cup.png" className="Header__cup-pic" />
        查看榜单
      </ul>
    );
  }
}
