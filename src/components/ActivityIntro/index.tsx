import * as React from 'react';

export interface ActivityIntroProps {}

export default class ActivityIntro extends React.Component<ActivityIntroProps, any> {
  public render() {
    let {} = this.props;
    return (
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
            Green及其他官方配色相关；照片规格及后期处理方式不限，清晰度不得低于500w像素。 {' \n'}
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
    );
  }
}
