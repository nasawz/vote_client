import * as React from 'react';

export interface DetailProps {}

export default class Detail extends React.Component<DetailProps, any> {
  public render() {
    return (
      <div>
        <div className="Detail__detail-wrap">
          <ul className="Detail__panel">
            <div className="Detail__img-swipe">
              <div className="mint-swipe">
                <div className="mint-swipe-items-wrap">
                  <div className="mint-swipe-item is-active">
                    <img src="" className="Detail__avatar" />
                  </div>
                </div>
                <div className="mint-swipe-indicators">
                  <div className="mint-swipe-indicator is-active" />
                </div>
              </div>
            </div>
            <li className="Detail__tr2">
              <span className="Detail__title">aa</span>
            </li>
            <li className="Detail__tr">
              <span className="Detail__desc">asdfasdfasdf</span>
            </li>
            <li className="Detail__tr">
              <span>
                <span
                  className="k-i-time-o Detail__time-pic"
                  style={{
                    color: 'rgb(57, 150, 246)'
                  }}
                />
              </span>
              <span className="Detail__label-name">距离结束</span>
              <span className="Detail__count-down"> 6天 20:41:02</span>
              <button
                className="Detail__vote-btn"
                style={{
                  borderColor: 'rgb(57, 150, 246)',
                  color: 'rgb(57, 150, 246)'
                }}
              >
                投我一票
              </button>
            </li>
            <li className="Detail__tr">
              <div className="Detail__un-present-rank">
                <div className="Detail__vote-num">已投 2 票</div>
                <div className="Detail__rank">当前为第1名</div>
              </div>
            </li>
          </ul>
          <ul className="Detail__activity-info">
            <img
              src=""
              style={{
                width: '100%'
              }}
            />
            <li className="Detail__act-li">
              <span className="Detail__act-name">新建投票活动</span>
              <span
                className="Detail__touch"
                style={{
                  color: 'rgb(57, 150, 246)'
                }}
              >
                回首页
              </span>
            </li>
            <li
              className="Detail__act-li Detail__shadow"
              style={{
                paddingTop: '0px',
                display: 'none'
              }}
            >
              <span className="Detail__act-info">
                活动介绍：
                <span className="Detail__activity-desc" />
              </span>
            </li>
          </ul>
          <div
            className="Detail__preview"
            style={{
              display: 'none',
              touchAction: 'none',
              userSelect: 'none'
            }}
          >
            <img src="" className="Detail__preview-img" />
          </div>
        </div>
        <div style={{ display: 'none' }}>
          <div className="Alert__backdrop" />
          <div className="Alert__remind-wrap">
            <div className="Alert__content-wrap">
              <div className="Alert__close-alert">
                <i className="k-i-close-o" />
              </div>
              <div className="Alert__success-pic">
                <img src="assets/vote_fail.png" className="Alert__success-image" />
              </div>
              <div className="Alert__remind-text">
                <pre className="Alert__remind">投票失败</pre>
              </div>
              <button
                className="Alert__back"
                style={{
                  backgroundColor: 'rgb(57, 150, 246)',
                  color: 'rgb(255, 255, 255)'
                }}
              >
                确认
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
