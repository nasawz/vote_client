import * as React from 'react';
import { connect } from 'react-redux';
// import Auth from '../../../components/auth';
// import Paper from '../../../components/paper';
import Category from '../../../components/Category';
export interface RankProps {
  activity: any;
}

class Rank extends React.Component<RankProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: ''
    };
  }
  clickHandler(category) {
    this.setState(
      {
        category
      },
      () => {
        // 获取列表数据
      }
    );
  }
  public render() {
    let { category } = this.state;
    let { activity } = this.props;
    return (
      <div>
        <div className="Charts__wrap">
          <div
            className="Charts__head-wrap"
            style={{
              backgroundColor: activity.primary_color
            }}
          >
            <img src="assets/images/background.png" />
          </div>
          <div className="Charts__content-wrap">
            <div>
              <div className="Charts__model-wrap">
                <img src="assets/images/star.png" className="Charts__model" />
                <span className="Charts__circle-tool Charts__circle1" />
                <span className="Charts__show-add">+</span>
                <span className="Charts__circle-tool Charts__circle2" />
                <span className="Charts__circle-tool Charts__circle3" />
              </div>
            </div>
            <div className="Charts__text">
              {/*<p className="Charts__name">新建投票活动</p>*/}
              <Category
                activeKey={category ? category : activity.categorys[0]}
                categories={activity.categorys}
                primary_color={activity.primary_color}
                clickHandler={this.clickHandler.bind(this)}
              />
              <div className="Charts__list">
                <span>名次</span> <span className="Charts__list-name">名称</span>
                <span className="Charts__list-num">票数</span>
              </div>
              <div className="Charts__wrap-bottom">
                <ul className="Charts__model-ul">
                  <li>
                    <img src="assets/images/rank_1.png" />
                    <p className="Charts__model-name Charts__model-name1">aa</p>
                    <p
                      className="Charts__model-num Charts__model-num1"
                      style={{ color: activity.primary_color }}
                    >
                      2<span className="Charts__ticket-unit">票</span>
                    </p>
                  </li>
                  <li>
                    <img src="assets/images/rank_2.png" />
                    <p className="Charts__model-name Charts__model-name1">aa</p>
                    <p
                      className="Charts__model-num Charts__model-num1"
                      style={{ color: activity.primary_color }}
                    >
                      2<span className="Charts__ticket-unit">票</span>
                    </p>
                  </li>
                  <li>
                    <img src="assets/images/rank_3.png" />
                    <p className="Charts__model-name Charts__model-name1">aa</p>
                    <p
                      className="Charts__model-num Charts__model-num1"
                      style={{ color: activity.primary_color }}
                    >
                      2<span className="Charts__ticket-unit">票</span>
                    </p>
                  </li>
                  <li>
                    <div
                      className="Charts__circle"
                      style={{
                        backgroundColor: activity.primary_color
                      }}
                    >
                      <span className="Charts__number">4</span>
                    </div>
                    <p className="Charts__model-name Charts__model-name1">aa</p>
                    <p
                      className="Charts__model-num Charts__model-num1"
                      style={{ color: activity.primary_color }}
                    >
                      2<span className="Charts__ticket-unit">票</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {
    activity: state.activity
  };
};

export default connect(mapState2Props)(Rank);
