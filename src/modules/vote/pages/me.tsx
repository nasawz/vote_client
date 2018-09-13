import * as React from 'react';
import { connect } from 'react-redux';

export interface MeProps { }

class Me extends React.Component<MeProps, any> {
  public render() {
    return (
      <div>
        <div className="MySignUp__wrap">
          <div className="MySignUp__split">
            <div className="signUpInformation__info-wrap">
              <div className="signUpInformation__signup-info">报名信息</div>
              <div className="signUpInformation__detail">
                <div className="signUpInformation__info-pic">
                  <img
                    src="https://pic.kuaizhan.com/g3/b6/e4/6102-cb9d-4712-9e8d-1bbf6ac1f99d55"
                    className="signUpInformation__pic"
                  />
                  <span className="signUpInformation__pic-num">3</span>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAflBMVEX///////////////////////////9MaXH///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////97HwtyAAAAKXRSTlNgPiS6V7P9AMDsqynQARXyZvGZsbk3iw0CKAN8LeZtXWnfX2hbIFIdTyejEZ0AAAB4SURBVBjTfdHJDoJAEEXRYmooZ1FwFifQ+/8/6IIYSDXylmfRldyWWDHTWDQRs0QFSc2EETwGBw/3W1hZDIGZxd0SJt6bwSZf/Lk+nftYrEsPzwqnPt6qNLwAXDt84Z73tsbjhx/XJXJNi+8o6y2qR4NYHIw89B1fmZEXxD5HYPcAAAAASUVORK5CYII="
                    className="signUpInformation__icon"
                  />
                </div>
                <div className="signUpInformation__information">
                  <p className="signUpInformation__name">名称: sfdasdf</p>
                  <p className="signUpInformation__introduction">详细介绍: sfdasdfasdfasd</p>
                  <p className="signUpInformation__introduction">性别: 男</p>
                  <p className="signUpInformation__introduction">年龄: sdfasdf</p>
                  <p className="signUpInformation__introduction">备注: asdfasdf</p>
                </div>
              </div>
            </div>
          </div>
          <div className="MySignUp__bottom-wrap">
            <div
              className="MySignUp__subcontent"
              style={{ backgroundColor: 'rgb(57, 150, 246)', color: 'rgb(255, 255, 255)' }}
            >
              删除作品
            </div>
            <div
              className="MySignUp__subcontent"
              style={{ backgroundColor: 'rgb(57, 150, 246)', color: 'rgb(255, 255, 255)' }}
            >
              返回投票
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(Me);
