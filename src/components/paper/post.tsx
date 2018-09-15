import * as React from 'react';

export interface PostProps {}

export default class Post extends React.Component<PostProps, any> {
  public render() {
    return (
      <div>
        <ul className="Pub__panel">
          <span className="Pub__title">新建投票活动（报名）</span>
        </ul>
        <ul className="Pub__panel Pub__name-wrap">
          <label className="Pub__name Pub__label">名称：</label>
          <div className="Pub__auto-fill-right">
            <input placeholder="请输入名称，必填" className="Pub__name-input" />
            <span className="Pub__txt-len">0/100</span>
          </div>
        </ul>
        <ul className="Pub__panel">
          <span className="Pub__label">详细介绍：</span>
          <textarea placeholder="请输入详细介绍，选填" className="Pub__desc-input" />
          <span className="Pub__txt-len">0/1000</span>
        </ul>
        <ul className="Pub__panel Pub__pic-wrap">
          <span className="Pub__label">图片：</span>
          <div className="Pub__pub-img-upload">
            <div className="PubImgUpload__avatars-wrap">
              <div className="PubImgUpload__avatar-content">
                <div className="PubImgUpload__add-img">
                  <div className="PubImgUpload__camera-wrap">
                    <i className="k-i-camera PubImgUpload__camera" />
                    <p className="PubImgUpload__pic-txt">上传图片</p>
                    <p className="PubImgUpload__pic-txt">(最多6张)</p>
                  </div>
                </div>
              </div>
              <div className="PubImgUpload__avatar-content">
                <img
                  src="https://pic.kuaizhan.com/g3/59/9c/4692-f3a2-4288-95a0-7d49307be87226/imageView/v1/thumbnail/320x320"
                  className="PubImgUpload__avatar"
                />
                <div className="PubImgUpload__close-icon" />
              </div>
              <div className="PubImgUpload__loading-wrap">
                <div className="PubImgUpload__loading" />
              </div>
            </div>
            <input
              type="file"
              name="file"
              accept="image/gif,image/jpeg,image/jpg,image/png"
              style={{ display: 'none' }}
            />
          </div>
        </ul>
        <ul className="Pub__panel">
          <div>
            <span className="PubCustomSettings__label">其他信息：</span>
            <li>
              <div className="PubCustomSettings__single-select-wrap">
                <span className="PubCustomSettings__single-select-label">请选择性别，选填</span>
                <span className="PubCustomSettings__right-icon PubCustomSettings__single-select-val" />
                <span className="PubCustomSettings__single-select-val" />
              </div>
              <div>
                <div className="RadioGroup__content" style={{ display: 'none' }}>
                  <li className="RadioGroup__item-wrap">
                    <span className="RadioGroup__label">男</span>
                    <span className="RadioGroup__radio" />
                  </li>
                  <li className="RadioGroup__item-wrap">
                    <span className="RadioGroup__label">女</span>
                    <span className="RadioGroup__radio RadioGroup__selected" />
                  </li>
                </div>
                <div className="RadioGroup__wrap" style={{ display: 'none' }} />
              </div>
            </li>
            <li>
              <div className="InputField__wrap">
                <input required className="InputField__input" />
                <span className="InputField__highlight" />
                <span className="InputField__bar" />
                <label className="InputField__label">请输入年龄，选填</label>
                <span className="InputField__num">0/100</span>
              </div>
              <span className="PubCustomSettings__txt-len">0 / 100</span>
            </li>
            <li>
              <div className="InputField__wrap">
                <textarea required className="InputField__input InputField__textarea" />
                <span className="InputField__highlight" /> <span className="InputField__bar" />
                <label className="InputField__label">请输入备注，选填</label>
                <span className="InputField__num">0/1000</span>
              </div>
              <span className="PubCustomSettings__txt-len">0 / 1000</span>
            </li>
          </div>
        </ul>
        <ul className="Pub__pc-bottom">
          <button
            className="Pub__btn"
            style={{
              backgroundColor: 'rgb(57, 150, 246)',
              color: 'rgb(255, 255, 255)'
            }}
          >
            立即提交
          </button>
        </ul>
        <div style={{ height: '200px' }} />
        <div>
          <div className="PubConfirm__modal" style={{ display: 'none' }}>
            <ul className="PubConfirm__title">
              <p className="PubConfirm__info">报名信息</p>
              <div className="PubConfirm__close">
                <span className="PubConfirm__add" /> <span className="PubConfirm__add2" />
              </div>
            </ul>
            <div className="PubConfirm__content">
              <ul className="PubConfirm__avatar-wrap">
                <img src="" className="PubConfirm__avatar" />
                <div className="PubConfirm__avatar-num">
                  <i className="k-i-image PubConfirm__image-font" /> 3
                </div>
              </ul>
              <ul className="PubConfirm__label">名称：sfdasdf</ul>
              <ul className="PubConfirm__label">详细介绍： sfdasdfasdfasd</ul>
              <ul className="PubConfirm__label">性别：</ul>
              <ul className="PubConfirm__label">年龄：</ul>
              <ul className="PubConfirm__label">备注：</ul>
            </div>
            <ul className="PubConfirm__tip">请确认报名信息，提交后不能更改</ul>
            <button
              className="PubConfirm__btn"
              style={{ backgroundColor: 'rgb(57, 150, 246)', color: 'rgb(255, 255, 255)' }}
            >
              <div className="PubConfirm__loading" style={{ display: 'none' }} /> <span>确认</span>
            </button>
          </div>
          <div className="PubConfirm__remind-wrap">
            <div className="PubConfirm__content-wrap">
              <div className="PubConfirm__close">
                <span className="PubConfirm__add" /> <span className="PubConfirm__add2" />
              </div>
              <div className="PubConfirm__success-pic">
                <img src="/assets/images/join_succ.png" className="PubConfirm__success-image" />
              </div>
              <p className="PubConfirm__remind">报名信息已提交成功</p>
              <button
                className="PubConfirm__back"
                style={{ backgroundColor: 'rgb(57, 150, 246)', color: 'rgb(255, 255, 255)' }}
              >
                返回首页
              </button>
            </div>
          </div>
          <div className="PubConfirm__backdrop" />
        </div>
      </div>
    );
  }
}
