import * as React from 'react';
import classnames from 'classnames';
import Alert from '../../../components/Alert';
import { connect } from 'react-redux';
import Parse from '../../../api/parse';
import { Picker, List, Toast } from 'antd-mobile';
import _ from 'lodash';
export interface OpusProps {
  title;
  primary_color;
  categorys;
  history;
  addVoteItem;
  activityId;
  getMyVoteItem;
}

class Opus extends React.Component<OpusProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      imgUrl: '',
      category: null,
      title: '',
      desc: '',
      showPubConfirmModal: false,
      showPubRemindModal: false,
      loading: false,
      pubResult: ''
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
  onTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }
  onDescChange(e) {
    this.setState({
      desc: e.target.value
    });
  }
  delImg() {
    this.setState({
      imgUrl: ''
    });
  }
  onSubmit() {
    let { title, desc, category, imgUrl } = this.state;
    if (title == '') {
      Toast.info('请输入名称', 1);
      return;
    }
    if (!category) {
      Toast.info('请选择类别', 1);
      return;
    }
    if (imgUrl == '') {
      Toast.info('请上传图片', 1);
      return;
    }

    this.setState({ showPubConfirmModal: true });
  }
  closeModal() {
    let { loading } = this.state;
    if (!loading) {
      this.setState({ showPubConfirmModal: false, showPubRemindModal: false });
    }
  }
  openPubRemindModal() {
    this.setState({ showPubRemindModal: true });
  }
  goBack() {
    this.props.history.goBack();
  }
  async onConfirm() {
    let { title, desc, category, imgUrl, loading } = this.state;
    let { activityId, getMyVoteItem } = this.props;
    if (!loading) {
      this.setState({ loading: true });
      try {
        await this.props.addVoteItem({
          activityId,
          data: {
            title,
            desc,
            category: category[0],
            pic: imgUrl
          }
        });
        this.setState({ showPubConfirmModal: false, pubResult: 'succ' });
        getMyVoteItem(activityId);
        this.openPubRemindModal();
      } catch (error) {
        this.setState({ showPubConfirmModal: false, pubResult: 'fail' });
        this.openPubRemindModal();
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  public render() {
    let {
      uploading,
      imgUrl,
      category,
      title,
      desc,
      showPubConfirmModal,
      showPubRemindModal,
      loading,
      pubResult
    } = this.state;
    let { primary_color, categorys } = this.props;
    let cls = {
      'PubImgUpload__add-img': true,
      disabled: imgUrl ? true : false
    };
    return (
      <div>
        <ul className="Pub__panel">
          <span className="Pub__title">{this.props.title} (报名)</span>
        </ul>
        <ul className="Pub__panel Pub__name-wrap">
          <label className="Pub__name Pub__label">名称：</label>
          <div className="Pub__auto-fill-right">
            <input
              placeholder="请输入名称，必填"
              maxLength={100}
              value={title}
              onChange={this.onTitleChange.bind(this)}
              className="Pub__name-input"
            />
            <span className="Pub__txt-len">
              {title.length}
              /100
            </span>
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
            value={desc}
            onChange={this.onDescChange.bind(this)}
            maxLength={1000}
          />
          <span className="Pub__txt-len">
            {desc.length}
            /1000
          </span>
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
        {/* <ul className="Pub__panel">
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
        </ul> */}
        <ul className="Pub__pc-bottom">
          <button
            className="Pub__btn"
            style={{
              backgroundColor: primary_color,
              color: 'rgb(255, 255, 255)'
            }}
            onClick={this.onSubmit.bind(this)}
          >
            立即提交
          </button>
        </ul>
        <div style={{ height: '200px' }} />
        <div>
          <div
            className="PubConfirm__modal"
            style={{ display: showPubConfirmModal ? 'block' : 'none' }}
          >
            <ul className="PubConfirm__title">
              <p className="PubConfirm__info">报名信息</p>
              <div className="PubConfirm__close" onClick={this.closeModal.bind(this)}>
                <span className="PubConfirm__add" /> <span className="PubConfirm__add2" />
              </div>
            </ul>
            <div className="PubConfirm__content">
              <ul className="PubConfirm__avatar-wrap">
                <img src={imgUrl != '' ? `${imgUrl}-75` : ''} className="PubConfirm__avatar" />
                <div className="PubConfirm__avatar-num">
                  <i className="k-i-image PubConfirm__image-font" />
                </div>
              </ul>
              <ul className="PubConfirm__label">
                名称：
                {title}
              </ul>
              <ul className="PubConfirm__label">
                类别：
                {category}
              </ul>
              <ul className="PubConfirm__label">详细介绍： {desc}</ul>
              {/* <ul className="PubConfirm__label">性别：</ul>
              <ul className="PubConfirm__label">年龄：</ul>
              <ul className="PubConfirm__label">备注：</ul> */}
            </div>
            <ul className="PubConfirm__tip">请确认报名信息，提交后不能更改</ul>
            <button
              className="PubConfirm__btn"
              style={{ backgroundColor: primary_color, color: 'rgb(255, 255, 255)' }}
              onClick={this.onConfirm.bind(this)}
            >
              <div className="PubConfirm__loading" style={{ display: loading ? '' : 'none' }} />{' '}
              <span>确认</span>
            </button>
          </div>

          <div
            className="PubConfirm__remind-wrap"
            style={{ display: showPubRemindModal ? 'block' : 'none' }}
          >
            <div className="PubConfirm__content-wrap">
              <div className="PubConfirm__close" onClick={this.closeModal.bind(this)}>
                <span className="PubConfirm__add" /> <span className="PubConfirm__add2" />
              </div>
              <div className="PubConfirm__success-pic">
                <img
                  src={
                    pubResult == 'succ'
                      ? '/assets/images/join_succ.png'
                      : '/assets/images/vote_fail.png'
                  }
                  className="PubConfirm__success-image"
                />
              </div>
              <p className="PubConfirm__remind">
                {pubResult == 'succ' ? '报名信息已提交成功' : '报名信息提交失败'}
              </p>
              <button
                className="PubConfirm__back"
                style={{ backgroundColor: primary_color, color: 'rgb(255, 255, 255)' }}
                onClick={this.goBack.bind(this)}
              >
                返回首页
              </button>
            </div>
          </div>

          <div
            className="PubConfirm__backdrop"
            style={{ display: showPubConfirmModal || showPubRemindModal ? 'block' : 'none' }}
          />
        </div>
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {
    title: state.activity.title,
    activityId: state.activity.objectId,
    categorys: state.activity.categorys,
    primary_color: state.activity.primary_color
  };
};

const mapDispatch2Props = ({ vote: { addVoteItemAsync, getMyVoteItemAsync } }) => ({
  addVoteItem: addVoteItemAsync,
  getMyVoteItem: getMyVoteItemAsync
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(Opus);
