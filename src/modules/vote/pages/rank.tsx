import * as React from 'react';
import { connect } from 'react-redux';
// import Auth from '../../../components/auth';
// import Paper from '../../../components/paper';
import Category from '../../../components/Category';
import RankItem from '../../../components/RankItem';
export interface RankProps {
  activity: any;
  getRankListAsync: any;
  rank_list: any;
}

class Rank extends React.Component<RankProps, any> {
  constructor(props) {
    super(props);
    let { activity } = this.props;
    this.state = {
      category: activity.categorys[0],
      page_num: 1
    };
  }
  clickHandler(category) {
    this.setState(
      {
        category
      },
      () => {
        // 获取列表数据
        console.log(this.state.category);
      }
    );
  }
  getData() {
    let { activity } = this.props;

    let limit = 10;
    let skip = limit * (this.state.page_num - 1);
    let activityId = activity.objectId;
    let category = this.state.category;
    this.props.getRankListAsync({
      limit,
      skip,
      activityId,
      category
    });
  }
  componentDidMount() {
    this.getData();
  }
  renderItem() {
    let { rank_list, activity } = this.props;
    return rank_list.map((rank) => {
      return <RankItem activity={activity} rank={rank} />;
    });
  }

  public render() {
    let { category } = this.state;
    let { activity, rank_list } = this.props;
    console.log('rank_list', rank_list);
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
                <ul className="Charts__model-ul">{this.renderItem()}</ul>
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
    activity: state.activity,
    rank_list: state.vote.rank_list
  };
};
const mapDispatch2Props = ({ vote: { getRankListAsync } }) => ({
  getRankListAsync: getRankListAsync
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(Rank);
