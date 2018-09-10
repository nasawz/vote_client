import * as React from 'react';

export interface HomeProps {}

export default class Home extends React.Component<HomeProps, any> {
  public render() {
    return (
      <div>
        <div>
          <div className="PcCode__code">
            <div className="PcCode__code-content">
              <img
                src="//www.kuaizhan.com/common/encode-png?data=https%3A%2F%2Fvote165b42bec6a.kuaizhan.com%2Fvote%2Fmobile.html%3Factivity_id%3D5b9279d62bd4c3000190ac90%23%2Flist%2F5b9279d62bd4c3000190ac90"
                alt=""
              />
              <div className="PcCode__code-text">
                扫描二维码
                <br />
                用手机访问本投票
              </div>
            </div>
          </div>
        </div>
        <div className="LoginTab__title-wrap slideOut">
          <div className="LoginTab__wrap">
            <img src="" className="LoginTab__avatar" />
            <span className="LoginTab__right-wrap">立即登录</span>
          </div>
        </div>
        <div>
          <div style={{ display: 'none' }}>
            <div className="Qrcode__backdrop">
              <div className="Qrcode__content-wrap">
                <div
                  className="Qrcode__slide Qrcode__slide-animation"
                  style={{
                    boxShadow: 'rgb(57, 150, 246) 0px 8px 12px inset',
                    display: 'none'
                  }}
                />
                <div
                  className="Qrcode__square Qrcode__square1"
                  style={{
                    borderTop: '2px solid rgb(57, 150, 246)',
                    borderLeft: '2px solid rgb(57, 150, 246)'
                  }}
                />
                <div
                  className="Qrcode__square Qrcode__square2"
                  style={{
                    borderTop: '2px solid rgb(57, 150, 246)',
                    borderRight: '2px solid rgb(57, 150, 246)'
                  }}
                />
                <div
                  className="Qrcode__square Qrcode__square3"
                  style={{
                    borderBottom: '2px solid rgb(57, 150, 246)',
                    borderLeft: '2px solid rgb(57, 150, 246)'
                  }}
                />
                <div
                  className="Qrcode__square Qrcode__square4"
                  style={{
                    borderBottom: '2px solid rgb(57, 150, 246)',
                    borderRight: '2px solid rgb(57, 150, 246)'
                  }}
                />
                <div className="Qrcode__img-wrap">
                  <img src="" className="Qrcode__image" />
                </div>
                <div className="Qrcode__remind-wrap">
                  <p className="Qrcode__remind-p">
                    长按后
                    <span className="Qrcode__remind-span" style={{ color: 'rgb(57, 150, 246)' }}>
                      识别二维码
                    </span>
                    完成投票
                  </p>
                  <p className="Qrcode__remind-p">
                    识别后请
                    <span className="Qrcode__remind-span" style={{ color: 'rgb(57, 150, 246)' }}>
                      回复“投票”
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Bottom__bottom-wrap">
          <img src="" alt="" className="Bottom__logo" />
          <div className="Bottom__vote-info___FmyY_0">本投票由&nbsp;nasawz&nbsp;技术支持</div>
        </div>
        <div style={{ display: 'none' }}>
          <div className="Loading__center" />
        </div>
        <div style={{ display: 'none' }}>
          <div className="Alert__backdrop" />
          <div className="Alert__remind-wrap">
            <div className="Alert__content-wrap">
              <div className="Alert__close-alert">
                <i className="k-i-close-o" />
              </div>
              <div className="Alert__success-pic">
                <img
                  src="//static-1252921496.file.myqcloud.com/vote/images/2UDzh__alert-success.png"
                  className="Alert__success-image"
                />
              </div>
              <div className="Alert__remind-text">
                <pre className="Alert__remind">投票成功</pre>
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
        <div style={{ display: 'none' }}>
          <div className="Alert__backdrop" />
          <div className="Alert__remind-wrap">
            <div className="Alert__content-wrap">
              <div className="Alert__close-alert">
                <i className="k-i-close-o" />
              </div>
              <div className="Alert__success-pic">
                <img
                  src="//static-1252921496.file.myqcloud.com/vote/images/6XRkn__alert-no-votes.png"
                  className="Alert__success-image"
                />
              </div>
              <div className="Alert__remind-text">
                <pre className="Alert__remind">对当前投票项只能投一票</pre>
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
