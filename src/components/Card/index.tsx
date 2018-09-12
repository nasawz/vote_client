import * as React from 'react';

export interface CardProps {
    show?
    img?
    remind?
    doClose?
    doConfirm?
}

export default class Card extends React.Component<CardProps, any> {
    doClose() {
        let { doClose } = this.props
        doClose && doClose()
    }
    doConfirm() {
        let { doConfirm } = this.props
        doConfirm && doConfirm()
    }
    public render() {
        let { show, img, remind } = this.props
        return (
            <div
                className="FlowItem__item List__left-column"

            >
                <div>
                    <div className="">
                        <div
                            className="FlowItem__num"
                            style={{
                                backgroundColor: 'rgb(57, 150, 246)',
                                color: 'rgb(255, 255, 255)'
                            }}
                        >
                            1
                    </div>
                        <img src="" className="FlowItem__avatar" />
                    </div>
                    <div>
                        <label className="FlowItem__title">aa</label>
                        <div className="FlowItem__desc">asdfasdfasdf</div>
                    </div>
                </div>
                <div>
                    <span
                        className="FlowItem__vote-num"
                        style={{
                            color: 'rgb(57, 150, 246)'
                        }}
                    >
                        1
                  </span>
                    <span className="FlowItem__vote-num-desc">票</span>
                </div>
                <div className="FlowItem__btn">
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
                                        className="Qrcode__square Qrcode__square1__1Zbdc_0"
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
                                    <div className="Qrcode__img-wrap__XD9xN_0">
                                        <img src="" className="Qrcode__image" />
                                    </div>
                                    <div className="Qrcode__remind-wrap">
                                        <p className="Qrcode__remind-p">
                                            长按后
                                            <span
                                                className="Qrcode__remind-span"
                                                style={{ color: 'rgb(57, 150, 246)' }}
                                            >
                                                识别二维码
                                            </span>
                                            完成投票
                                        </p>
                                        <p className="Qrcode__remind-p">
                                            识别后请
                                            <span
                                                className="Qrcode__remind-spa"
                                                style={{ color: 'rgb(57, 150, 246)' }}
                                            >
                                                回复“投票”
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="VoteButton__subcontent VoteButton__small undefined"
                            style={{
                                backgroundColor: 'rgb(57, 150, 246)',
                                color: 'rgb(255, 255, 255)'
                            }}
                        >
                            <span>投我一票</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
