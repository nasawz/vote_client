import * as React from 'react';

export interface CardProps {
  primary_color: any;
  opus: any;
  sendVote: any;
  index: any;
  goInfo: any;
}

export default class Card extends React.Component<CardProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      score: props.opus.score
    };
  }
  sendVote(id, e) {
    e.stopPropagation();
    if (this.props.sendVote) {
      this.props.sendVote(id, (succ) => {
        if (succ) {
          this.setState({
            score: this.state.score + 1
          });
        }
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    this.state = {
      score: nextProps.opus.score
    };
  }
  goInfo(data) {
    let { goInfo } = this.props;
    goInfo && goInfo(data);
  }
  public render() {
    let { primary_color, opus, index } = this.props;
    let { score } = this.state;
    opus = opus || {};
    return (
      <div className="FlowItem__item List__left-column" onClick={this.goInfo.bind(this, opus)}>
        <div>
          <div className="" style={{ height: '128px', overflow: 'hidden' }}>
            <div
              className="FlowItem__num"
              style={{
                backgroundColor: primary_color,
                color: 'rgb(255, 255, 255)'
              }}
            >
              {parseInt(index) + 1}
            </div>
            <img src={`${opus.pic}-700`} className="FlowItem__avatar" />
          </div>
          <div>
            <label className="FlowItem__title">{opus.title}</label>
            <div className="FlowItem__desc">{opus.desc}</div>
          </div>
        </div>
        <div>
          <span
            className="FlowItem__vote-num"
            style={{
              color: primary_color
            }}
          >
            {score}
          </span>
          <span className="FlowItem__vote-num-desc">票</span>
        </div>
        <div className="FlowItem__btn">
          <div>
            <button
              onClick={this.sendVote.bind(this, opus.objectId)}
              className="VoteButton__subcontent VoteButton__small undefined"
              style={{
                backgroundColor: primary_color,
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
