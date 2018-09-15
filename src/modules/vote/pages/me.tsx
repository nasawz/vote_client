import * as React from 'react';
import { connect } from 'react-redux';
import { Toast, Modal } from 'antd-mobile';
const alert = Modal.alert;
export interface MeProps {
  primary_color;
  my_vote_item;
  history;
  delMyVoteItem;
  activityId;
}

class Me extends React.Component<MeProps, any> {
  goBack() {
    this.props.history.goBack();
  }
  goInfo() {
    let { my_vote_item } = this.props;
    this.props.history.push(`/vote/info/${my_vote_item.objectId}`);
  }
  doDel() {
    let { activityId, my_vote_item, delMyVoteItem, history } = this.props;
    alert('删除', '删除后无法恢复', [
      { text: '取消', onPress: () => {} },
      {
        text: '确认删除',
        onPress: async () => {
          try {
            await delMyVoteItem({
              activityId,
              id: my_vote_item.objectId
            });
            Toast.info('删除成功', 2, () => {
              history.goBack();
            });
          } catch (error) {
            Toast.fail('删除失败', 2);
          }
        }
      }
    ]);
  }
  public render() {
    let { primary_color, my_vote_item } = this.props;
    if (!my_vote_item) {
      return <div />;
    }
    return (
      <div>
        <div className="MySignUp__wrap">
          <div className="MySignUp__split">
            <div className="signUpInformation__info-wrap">
              <div className="signUpInformation__signup-info">报名信息</div>
              <div className="signUpInformation__detail" onClick={this.goInfo.bind(this)}>
                <div className="signUpInformation__info-pic">
                  <img src={my_vote_item.pic} className="signUpInformation__pic" />
                  <span className="signUpInformation__pic-num" />
                  <img src="/assets/images/pic.png" className="signUpInformation__icon" />
                </div>
                <div className="signUpInformation__information">
                  <p className="signUpInformation__name">名称: {my_vote_item.title}</p>
                  <p className="signUpInformation__introduction">分类: {my_vote_item.category}</p>
                  <p className="signUpInformation__introduction">详细介绍: {my_vote_item.desc}</p>
                  <p className="signUpInformation__introduction">
                    当前为第
                    {my_vote_item.rank}名
                  </p>
                  {/* <p className="signUpInformation__introduction">性别: 男</p>
                  <p className="signUpInformation__introduction">年龄: sdfasdf</p>
                  <p className="signUpInformation__introduction">备注: asdfasdf</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="MySignUp__bottom-wrap">
            <div
              className="MySignUp__subcontent"
              style={{ backgroundColor: 'red', color: 'rgb(255, 255, 255)' }}
              onClick={this.doDel.bind(this)}
            >
              删除作品
            </div>
            <div
              className="MySignUp__subcontent"
              style={{ backgroundColor: primary_color, color: 'rgb(255, 255, 255)' }}
              onClick={this.goBack.bind(this)}
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
  return {
    activityId: state.activity.objectId,
    primary_color: state.activity.primary_color,
    my_vote_item: state.vote.my_vote_item
  };
};

const mapDispatch2Props = ({ vote: { delMyVoteItemAsync } }) => ({
  delMyVoteItem: delMyVoteItemAsync
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(Me);
