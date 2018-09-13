import * as React from 'react';
import Alert from '../../../components/Alert';
import { connect } from 'react-redux';

export interface OpusProps {}

class Opus extends React.Component<OpusProps, any> {
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
                <img
                  src="https://pic.kuaizhan.com/g3/b6/e4/6102-cb9d-4712-9e8d-1bbf6ac1f99d55"
                  className="PubConfirm__avatar"
                />
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

          {/*
            <div className="PubConfirm__remind-wrap">
            <div className="PubConfirm__content-wrap">
              <div className="PubConfirm__close">
                <span className="PubConfirm__add" /> <span className="PubConfirm__add2" />
              </div>
              <div className="PubConfirm__success-pic">
                <img
                  src="data:image/png;base64,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"
                  className="PubConfirm__success-image"
                />
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
          */}
        </div>
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(Opus);
