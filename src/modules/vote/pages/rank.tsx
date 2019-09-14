import * as React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'antd-mobile';
import Category from '../../../components/Category';
import RankItem from '../../../components/RankItem';
import { ListView } from 'antd-mobile';
export interface RankProps {
  activity: any;
  getRankListAsync: any;
  clearRankList: any;
  rank_list: any;
  dataSource: any;
  history;
}

let pageIndex = 1;

class Rank extends React.Component<RankProps, any> {
  flag: any;
  rData: any;
  lv: any;
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    let { activity } = this.props;
    this.state = {
      category: activity.categorys[0],
      // pageIndex: 1,
      dataSource
    };
  }

  clickHandler(category) {
    this.setState(
      {
        category
      },
      () => {
        // 获取列表数据
        this.props.clearRankList();
        pageIndex = 1;
        this.getData();
      }
    );
  }
  getData() {
    let { activity } = this.props;
    let limit = 10;
    let skip = limit * (pageIndex - 1);
    let activityId = activity.objectId;
    let category = this.state.category;
    this.props.getRankListAsync({
      limit,
      skip,
      activityId,
      category
    });
  }
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    pageIndex = pageIndex + 1;
    this.getData();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.rank_list !== this.props.rank_list) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.rank_list),
        isLoading: false
      });
    }
  }

  componentDidMount() {
    this.getData();
  }
  componentWillUnmount() {
    this.props.clearRankList();
  }
  goInfo(data) {
    this.props.history.push(`/vote/info/${data.objectId}`);
  }
  public render() {
    let { category } = this.state;
    let { activity, rank_list } = this.props;

    const row = (rowData, sectionID, rowID) => {
      return <RankItem goInfo={this.goInfo.bind(this)} activity={activity} rank={rowData} />;
    };

    return (
      <div className="Charts__wrap">
        <div
          className="Charts__head-wrap"
          style={{
            backgroundColor: activity.primary_color
          }}
        >
          <img src="/assets/images/background.png" />
        </div>
        <div className="Charts__content-wrap">
          <div>
            <div className="Charts__model-wrap">
              <img src="/assets/images/rank.png" className="Charts__model" />
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
                <ListView
                  ref={(el) => (this.lv = el)}
                  dataSource={this.state.dataSource}
                  renderFooter={() => (
                    <div style={{ padding: 30, textAlign: 'center' }}>
                      {this.state.isLoading ? (
                        <div className="loading-data">
                          <ActivityIndicator size="small" text="加载中..." />
                        </div>
                      ) : (
                        '没有更多了'
                      )}
                    </div>
                  )}
                  renderRow={row}
                  className="am-list"
                  pageSize={4}
                  useBodyScroll
                  onScroll={() => {}}
                  scrollRenderAheadDistance={500}
                  onEndReached={this.onEndReached}
                  onEndReachedThreshold={10}
                />
              </ul>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img style={{ width: '100px' }} src="assets/images/logo.png" />
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
const mapDispatch2Props = ({ vote: { getRankListAsync, clearRankList } }) => ({
  getRankListAsync: getRankListAsync,
  clearRankList: clearRankList
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(Rank);
