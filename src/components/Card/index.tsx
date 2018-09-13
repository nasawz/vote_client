import * as React from 'react';

export interface CardProps {
  opus: any;
  sendVote: any;
}

export default class Card extends React.Component<CardProps, any> {
  sendVote(id) {
    if (this.props.sendVote) {
      this.props.sendVote(id);
    }
  }
  public render() {
    let { opus } = this.props;
    if (!opus) return <div />;
    return (
      <div className="FlowItem__item List__left-column">
        <div>
          <div className="">
            <div
              className="FlowItem__num"
              style={{
                backgroundColor: 'rgb(57, 150, 246)',
                color: 'rgb(255, 255, 255)'
              }}
            >
              {opus.rank}
            </div>
            <img src="" className="FlowItem__avatar" />
          </div>
          <div>
            <label className="FlowItem__title">{opus.name}</label>
            <div className="FlowItem__desc">{opus.desc}</div>
          </div>
        </div>
        <div>
          <span
            className="FlowItem__vote-num"
            style={{
              color: 'rgb(57, 150, 246)'
            }}
          >
            3
          </span>
          <span className="FlowItem__vote-num-desc">票</span>
        </div>
        <div className="FlowItem__btn">
          <div>
            <button
              onClick={this.sendVote.bind(this, opus.id)}
              className="VoteButton__subcontent VoteButton__small undefined"
              style={{
                backgroundColor: 'rgb(57, 150, 246)',
                color: 'rgb(255, 255, 255)'
              }}
            >
              <span>投我一票</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
