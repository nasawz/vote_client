import * as React from 'react';
import Card from '../Card'
import './style';

export interface PaperProps { }

export default class Paper extends React.Component<PaperProps, any> {
  public render() {
    let { children } = this.props;
    return (
      <div className="App__pcWrap">
        <div className="List__whole">
          <div className="Header__panel">
            <ul className="Header__avatar-content">
              <img src="" className="Header__avatar" />
            </ul>
            <ul>
              <li className="Header__title">投票活动</li>
            </ul>
            <div>
              <ul className="Header__card">
                <li>
                  <span className="Header__label-name">投票规则： </span>
                  <span>
                    <span className="Header__label-content">每天可投10票</span>
                  </span>
                </li>
                <li>
                  <span className="Header__label-name">报名时间： </span>
                  <span>
                    <span className="Header__label-content">
                      2018-09-07 21:15 至 2018-09-14 21:15
                    </span>
                  </span>
                </li>
                <li>
                  <span className="Header__label-name">投票时间： </span>
                  <span>
                    <span className="Header__label-content">
                      2018-09-07 21:15 至 2018-09-14 21:15
                    </span>
                  </span>
                </li>
              </ul>
              <ul className="Header__card">
                {/* Header__desc-content
              Header__desc-new */}
                <span className="Header__desc-content">
                  <span className="Header__label-name">活动介绍：</span>
                  <span>
                    {' '}
                    {' \n'}
                    活动规则：
                    {' \n'}
                    ★征集对象：全体xxx员工 {' \n'}
                    ★大赛主题：Discover xxx (分主题：Life inside xxx; xxx Code) {' \n'}
                    ★作品数量：每位xxx员工限提交一幅作品（可在作品页删除此作品重新提交，但是不可修改，删除时投票数清零）。{' '}
                    {' \n'}
                    ★作品要求：作品主题与xxx文化与员工生活相关，或画面中呈现与字母"E"、xxx
                    logo的方框相关的元素，或画面中颜色与xxx
                    Green及其他官方配色相关；照片规格及后期处理方式不限，清晰度不得低于500w像素。{' '}
                    {' \n'}
                    ★奖项设置：汇总所有主题设置各类惊喜奖项。 {' \n'}
                    ★评选方式：线上投票 {' \n'}
                    ★投票规则：每位关注"xxx大家庭"企业号且通过验证的员工，可对所有作品投票，每人每组可投3票；当作品页被转发到朋友圈时，每个外部人员可通过转发页对此作品投1票。{' '}
                    {' \n'}
                    活动流程： ★作品征集时间：即日起--10月8日（周一）24点
                    ★投票时间：即日起--10月8日（周一）24点 ★评选时间：2018年10月8日-----10月10日
                    ★获奖结果公布时间：2018年10月11日 大赛注意事项及帮助信息：
                    ★本次参赛作品的所有权以及最终解释权归xxx人力资源部所有。
                  </span>
                </span>
                <a href="javascript:void(0)" className="Header__name">
                  <span style={{ color: 'rgb(57, 150, 246)' }}>收起</span>{' '}
                  <span>
                    <i className="k-i-arrow-down Header__trans-deg" />
                  </span>
                </a>
                <a href="javascript:void(0)" className="Header__name">
                  <span style={{ color: 'rgb(57, 150, 246)' }}>展开</span>{' '}
                  <span>
                    <i className="k-i-arrow-down Header__trans" />
                  </span>
                </a>
              </ul>
              <ul className="Header__card Header__apply-wrap">
                <span className="Header__icon-style">
                  <span
                    className="k-i-time-o Header__time-pic"
                    style={{
                      color: 'rgb(57, 150, 246)'
                    }}
                  />
                </span>
                <span className="Header__label-name">距离结束</span>
                <span className="Header__count-down"> 6天 22:48:19</span>
                <button
                  className="Header__apply-btn"
                  style={{
                    borderColor: 'rgb(57, 150, 246)',
                    color: 'rgb(57, 150, 246)'
                  }}
                >
                  报名
                </button>
              </ul>
              <ul className="Header__statistics-wrap">
                <li className="Header__statistics-item">
                  <span className="Header__font">1</span> <br />
                  <span className="Header__label-content">参与选手</span>
                </li>
                <li className="Header__statistics-item">
                  <span className="Header__font">1</span> <br />
                  <span className="Header__label-content">累计投票</span>
                </li>
                <li className="Header__statistics-item">
                  <span className="Header__font">9</span> <br />
                  <span className="Header__label-content">累计访问</span>
                </li>
              </ul>
              <ul className="Header__to-ranking">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAByFBMVEVMaXH5xRP5xRP7wRP8vxP6xBP5xRP+2DL81Sv8vxP7wBP7wBP8vhP6wxP5xRP6xBP8vxP8vhP7whP6wxP7whP5xhP8vxP7wBP8vxP7wBP7wBP7wRP8vxP7wRP7wRP6xBP7wBP6xBP5xhP5xhP/3Dr5xhP/3Dr5xhP/2zj+2jX/2zj5xxP+2DL5xhP5xxP4yBP+2jX5xxP4yBP+2DL4yRP5xxP5xxP4yBP5xxP81Sv4yRP4yBP4yxb4yBP+2DL4yxb4yRP4yBP4yxb4yBP4yRP81Cj81Sv4yxb4yRP5zBn70SL70iX5zhz5zBn4yRP5zBn4yxb70iX81Cj4yRP4yxb5zBn6zx/4yRP91y75zBn4yxb6zx/70SL5zhz81Cj70iX70SL5zhz81Cj6zx/5zhz81Sv81Sv70iX5zBn4yxb81Cj81Sv5zhz5zBn81Cj70iX70iX70SL70SL6zx/70iX6zx/5zhz81Cj70SL5zhz5zBn6zx/5zBn4yxb5zhz91y781Sv70iX/3Dr/2zj+2jX+2DL81Cj70SL6zx/5zhz5zBn8vhP4yRP4yxb4yBP5xxP8vxP5xhP5xRP7wBP7wRP6xBP7whP6wxOtc2Y5AAAAf3RSTlMAcv0PgSz6cGDXD1KvcGXC5596YGXQ5syOEtva/gbEM125ecuXFn9zmZCA9MESfvl/8PyvcgUD+3SfxsbBGGkIYhKqvM9JjrTVHu0ecAsU9wz8MA660bHL8A/AS5U47BZW4fC1A+jyzmEB3vBXEfkJuNRnmCbGRwOHAVE83KvUxnU0JAAAAQhJREFUGBl1wQNDxGAABuA3bpdt27Yu27ZtG7c0tK26hb9bq7u2r9bzQJVwTUqCXcoNKQ12qbekHKioTxl3pHyKoqpw9Y9hWBZoutRCaqTpxTXMTgIN96ReHG2uYomZQhtD6NnCPrONcXYaaGX1doBd9hhj3BwwyOntAQfcGeZn+Am083rrOOQvT4BlYaCjRdDpGtk4F04BrPRLTeYKSVPbPSpdQNXZLJYViJrqenGoD18qy+Vs+UdesVxXA5vCrPRHTW5JETSJcYHP3+KTM/GLg6PVanX1goFo79dYFxjyfPeHMb+3ABhyCn+JisRfoTFhiqIEu7uBEGIKerKJ8DE5Q+PxoOcL1Qd5RLICJGFsaQAAAABJRU5ErkJggg=="
                  className="Header__cup-pic"
                />
                查看榜单
              </ul>
            </div>
          </div>
          <div className="List__search-wrap">
            <form className="List__search-form">
              <input
                type="search"
                placeholder="请输入投票项编号或名称"
                className="List__search-input"
              />
            </form>
            <span className="k-i-search-2 kz-e-search List__search-img" />
          </div>
          <div className="List__no-vote" style={{ display: 'none' }}>
            暂无投票项
          </div>
          <div className="List__no-vote" style={{ display: 'none' }}>
            抱歉，未搜索到
          </div>
          <div>
            <div
              className="List__double-flow-wrap"
              style={{
                height: '583.4px',
                position: 'relative'
              }}
            >
              <Card />
              <Card />
            </div>
          </div>
        </div>

        {children}
      </div>
    );
  }
}
