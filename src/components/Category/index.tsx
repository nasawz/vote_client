import * as React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
export interface CategoryProps {
  categories: [];
  activeKey?;
  clickHandler?;
  primary_color?;
}

export default class Category extends React.Component<CategoryProps, any> {
  clickHandler(category) {
    let { clickHandler } = this.props;
    clickHandler && clickHandler(category);
  }
  renderItem() {
    let { activeKey, categories, primary_color } = this.props;
    return categories.map((category) => {
      let cls = {
        'Header__statistics-item': true,
        active: category === activeKey
      };
      let style = { color: cls.active ? primary_color : '', lineHeight: '0.8rem' };
      return (
        <li className={classnames(cls)} onClick={this.clickHandler.bind(this, category)}>
          <span className="Header__label-content" style={style}>
            {category}
          </span>
        </li>
      );
    });
  }
  public render() {
    return <ul className="Header__statistics-wrap">{this.renderItem()}</ul>;
  }
}
