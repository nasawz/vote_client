import * as React from 'react';
import { connect } from 'react-redux';

export interface AlertProps {
  show?;
  img?;
  remind?;
  doClose?;
  primary_color;
}

class Alert extends React.Component<AlertProps, any> {
  doClose() {
    let { doClose } = this.props;
    doClose && doClose();
  }
  public render() {
    let { show, img, remind, primary_color } = this.props;
    return (
      <div style={{ display: show ? 'block' : 'none' }}>
        <div className="Alert__backdrop" />
        <div className="Alert__remind-wrap">
          <div className="Alert__content-wrap">
            <div className="Alert__close-alert" onClick={this.doClose.bind(this)}>
              <i className="k-i-close-o" />
            </div>
            <div className="Alert__success-pic">
              <img src={img} className="Alert__success-image" />
            </div>
            <div className="Alert__remind-text">
              <pre className="Alert__remind">{remind}</pre>
            </div>
            <button
              className="Alert__back"
              style={{
                backgroundColor: primary_color,
                color: 'rgb(255, 255, 255)'
              }}
              onClick={this.doClose.bind(this)}
            >
              确认
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {
    primary_color: state.activity.primary_color
  };
};

export default connect(mapState2Props)(Alert);
