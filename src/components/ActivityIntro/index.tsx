import * as React from 'react';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';

export interface ActivityIntroProps {
  desc;
  primary_color;
}

export default class ActivityIntro extends React.Component<ActivityIntroProps, any> {
  constructor(params) {
    super(params);
    this.state = {
      open: false
    };
  }
  openIntro() {
    this.setState({
      open: true
    });
  }
  closeIntro() {
    this.setState({
      open: false
    });
  }
  public render() {
    let { desc, primary_color } = this.props;
    let { open } = this.state;
    let cls = {
      'Header__desc-content': !open,
      'Header__desc-new': open
    };

    return (
      <ul className="Header__card">
        <span className={classnames(cls)}>
          <span className="Header__label-name">活动介绍：</span>
          <br />
          <div className="markdown-body">
            <ReactMarkdown source={desc} />
          </div>
        </span>
        <a
          href="javascript:void(0)"
          onClick={this.closeIntro.bind(this)}
          className="Header__name"
          style={{ display: open ? 'block' : 'none' }}
        >
          <span style={{ color: primary_color }}>收起</span>{' '}
          <span>
            <i className="k-i-arrow-down Header__trans-deg" />
          </span>
        </a>
        <a
          href="javascript:void(0)"
          onClick={this.openIntro.bind(this)}
          className="Header__name"
          style={{ display: open ? 'none' : 'block' }}
        >
          <span style={{ color: primary_color }}>展开</span>{' '}
          <span>
            <i className="k-i-arrow-down Header__trans" />
          </span>
        </a>
      </ul>
    );
  }
}
