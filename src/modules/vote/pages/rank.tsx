import * as React from 'react';
import { connect } from 'react-redux';
// import Auth from '../../../components/auth';
// import Paper from '../../../components/paper';
import Category from '../../../components/Category';
import RankItem from '../../../components/RankItem';
import { ListView } from 'antd-mobile';
export interface RankProps {
  activity: any;
  getRankListAsync: any;
  rank_list: any;
  dataSource: any;
}

const NUM_ROWS = 20;
let pageIndex = 0;

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
      page_num: 1,
      dataSource
    };
  }
  genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
      const ii = pIndex * NUM_ROWS + i;
      dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
  }
  clickHandler(category) {
    this.setState(
      {
        category
      },
      () => {
        // 获取列表数据
        console.log(this.state.category);
        this.getData();
      }
    );
  }
  getData() {
    let { activity } = this.props;
    let limit = 1;
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
  onEndReached = (event) => {
    console.log('---------');
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    // setTimeout(() => {
    //   this.rData = { ...this.rData, ...genData(++pageIndex) };
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //     isLoading: false
    //   });
    // }, 1000);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.rank_list !== this.props.rank_list) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.rank_list)
      });
    }
  }

  componentDidMount() {
    this.getData();
    // setTimeout(() => {
    //   this.rData = this.genData();
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //     isLoading: false
    //   });
    // }, 600);
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
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED'
        }}
      />
    );
    let index = 0;
    const row = (rowData, sectionID, rowID) => {
      if (index == rank_list.length - 1) {
        index = rank_list.length - 1;
      }
      const obj = rank_list[index++];
      return <RankItem activity={activity} rank={obj} />;
    };

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
                  <ListView
                    ref={(el) => (this.lv = el)}
                    dataSource={this.state.dataSource}
                    renderHeader={() => <span>header</span>}
                    renderFooter={() => (
                      <div style={{ padding: 30, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                      </div>
                    )}
                    renderRow={row}
                    // renderSeparator={separator}
                    className="am-list"
                    pageSize={4}
                    useBodyScroll
                    onScroll={() => {
                      console.log('scroll');
                    }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                  />

                  {/* {this.renderItem()} */}
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
