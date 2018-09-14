import * as React from 'react';
import classnames from 'classnames';
import Alert from '../../../components/Alert';
import { connect } from 'react-redux';
import Parse from '../../../api/parse';
import { Picker, List } from 'antd-mobile';
import _ from 'lodash';
export interface OpusProps {
  title;
  primary_color;
  categorys;
}

class Opus extends React.Component<OpusProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      imgUrl: '',
      category: null
    };
  }
  onchange(e) {
    /**
     * 上传文件的例子
     */
    this.setState({
      uploading: true
    });
    let file = e.target.files[0];
    let name = file.name;
    let parseFile = new Parse.File(name, file);
    parseFile.save().then(
      (res) => {
        console.log(res);
        this.setState({
          uploading: false,
          imgUrl: res._url
        });
      },
      (err) => {
        console.log(err);
        this.setState({
          uploading: false
        });
      }
    );
  }
  delImg() {
    this.setState({
      imgUrl: ''
    });
  }
  public render() {
    let { uploading, imgUrl } = this.state;
    let { title, primary_color, categorys } = this.props;
    let cls = {
      'PubImgUpload__add-img': true,
      disabled: imgUrl ? true : false
    };
    return (
      <div>
        <ul className="Pub__panel">
          <span className="Pub__title">{title} (报名)</span>
        </ul>
        <ul className="Pub__panel Pub__name-wrap">
          <label className="Pub__name Pub__label">名称：</label>
          <div className="Pub__auto-fill-right">
            <input placeholder="请输入名称，必填" maxLength={100} className="Pub__name-input" />
            <span className="Pub__txt-len">0/100</span>
          </div>
        </ul>
        <ul className="Pub__panel Pub__category-wrap">
          <Picker
            data={_.map(categorys, (c) => {
              return {
                label: c,
                value: c
              };
            })}
            cols={1}
            extra="请选择"
            onChange={(v) => this.setState({ category: v })}
            value={this.state.category}
          >
            <List.Item arrow="horizontal">类别</List.Item>
          </Picker>
        </ul>
        <ul className="Pub__panel">
          <span className="Pub__label">详细介绍：</span>
          <textarea
            placeholder="请输入详细介绍，选填"
            className="Pub__desc-input"
            maxLength={1000}
          />
          <span className="Pub__txt-len">0/1000</span>
        </ul>
        <ul className="Pub__panel Pub__pic-wrap">
          <span className="Pub__label">图片：</span>
          <div className="Pub__pub-img-upload">
            <div className="PubImgUpload__avatars-wrap">
              <div className="PubImgUpload__avatar-content">
                <div className={classnames(cls)}>
                  <div className="PubImgUpload__camera-wrap">
                    <i className="k-i-camera PubImgUpload__camera" />
                    <p className="PubImgUpload__pic-txt">上传图片</p>
                    <p className="PubImgUpload__pic-txt">(最多1张)</p>
                  </div>
                  {!imgUrl && (
                    <input
                      type="file"
                      name="file"
                      id=""
                      accept="image/gif,image/jpeg,image/jpg,image/png"
                      className="PubImgUpload__input"
                      onChange={this.onchange.bind(this)}
                    />
                  )}
                </div>
              </div>
              {imgUrl && (
                <div className="PubImgUpload__avatar-content">
                  <img src={`${imgUrl}-75`} className="PubImgUpload__avatar" />
                  <div className="PubImgUpload__close-icon" onClick={this.delImg.bind(this)} />
                </div>
              )}
              {uploading && (
                <div className="PubImgUpload__loading-wrap">
                  <div className="PubImgUpload__loading" />
                </div>
              )}
            </div>
          </div>
        </ul>
        <ul className="Pub__panel">
          <div>
            <span className="PubCustomSettings__label">其他信息：</span>
            <li />
            <li>
              <div className="InputField__wrap">
                <input required className="InputField__input" maxLength={100} />
                <span className="InputField__highlight" />
                <span className="InputField__bar" />
                <label className="InputField__label">请输入真实姓名，选填</label>
                <span className="InputField__num">0/100</span>
              </div>
            </li>
            <li>
              <div className="InputField__wrap">
                <input required className="InputField__input" maxLength={100} />
                <span className="InputField__highlight" /> <span className="InputField__bar" />
                <label className="InputField__label">请输入手机号，选填</label>
                <span className="InputField__num">0/100</span>
              </div>
            </li>
            <li>
              <div className="InputField__wrap">
                <input required className="InputField__input" maxLength={100} />
                <span className="InputField__highlight" /> <span className="InputField__bar" />
                <label className="InputField__label">请输入邮箱地址，选填</label>
                <span className="InputField__num">0/100</span>
              </div>
            </li>
          </div>
        </ul>
        <ul className="Pub__pc-bottom">
          <button
            className="Pub__btn"
            style={{
              backgroundColor: primary_color,
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
                  src="assets/images/join_succ.png"
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
  return {
    title: state.activity.title,
    categorys: state.activity.categorys,
    primary_color: state.activity.primary_color
  };
};

export default connect(mapState2Props)(Opus);
