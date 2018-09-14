import * as React from 'react';

export interface ListProps {}

export default class List extends React.Component<ListProps, any> {
  public render() {
    return (
      <div>
        <div className="Charts__wrap">
          <div
            className="Charts__head-wrap"
            style={{
              backgroundColor: 'rgb(57, 150, 246)'
            }}
          >
            <img src="//static-1252921496.file.myqcloud.com/vote/images/1pqXw__background.png" />
          </div>
          <div className="Charts__content-wrap">
            <div>
              <div className="Charts__model-wrap">
                <img
                  src="//static-1252921496.file.myqcloud.com/vote/images/2P21A__star.png"
                  className="Charts__model"
                />
                <span className="Charts__circle-tool Charts__circle1" />
                <span className="Charts__show-add">+</span>
                <span className="Charts__circle-tool Charts__circle2" />
                <span className="Charts__circle-tool Charts__circle3" />
              </div>
            </div>
            <div className="Charts__text">
              <p className="Charts__name">新建投票活动</p>
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
                      style={{ color: 'rgb(57, 150, 246)' }}
                    >
                      2<span className="Charts__ticket-unit">票</span>
                    </p>
                  </li>
                  <li>
                    <img src="assets/images/rank_2.png" />
                    <p className="Charts__model-name Charts__model-name1">aa</p>
                    <p
                      className="Charts__model-num Charts__model-num1"
                      style={{ color: 'rgb(57, 150, 246)' }}
                    >
                      2<span className="Charts__ticket-unit">票</span>
                    </p>
                  </li>
                  <li>
                    <img src="assets/images/rank_3.png" />
                    <p className="Charts__model-name Charts__model-name1">aa</p>
                    <p
                      className="Charts__model-num Charts__model-num1"
                      style={{ color: 'rgb(57, 150, 246)' }}
                    >
                      2<span className="Charts__ticket-unit">票</span>
                    </p>
                  </li>
                  <li>
                    <div
                      className="Charts__circle"
                      style={{
                        backgroundColor: 'rgb(57, 150, 246)'
                      }}
                    >
                      <span className="Charts__number">4</span>
                    </div>
                    <p className="Charts__model-name Charts__model-name1">aa</p>
                    <p
                      className="Charts__model-num Charts__model-num1"
                      style={{ color: 'rgb(57, 150, 246)' }}
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
