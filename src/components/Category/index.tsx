import * as React from 'react';
import classnames from 'classnames'

export interface CategoryProps {
  categories: [];
  activeKey?
  clickHandler?
}

export default class Category extends React.Component<CategoryProps, any> {
  clickHandler(category) {
    let { clickHandler } = this.props
    clickHandler && clickHandler(category)
  }
  renderItem() {
    let { activeKey, categories } = this.props;
    return categories.map((category) => {
      let cls = {
        'Header__statistics-item': true,
        'active': category === activeKey
      }
      return (
        <li className={classnames(cls)} onClick={this.clickHandler.bind(this, category)}>
          <span className="Header__font">1</span> <br />
          <span className="Header__label-content">{category}</span>
        </li>
      )
    })
  }
  public render() {

    return (
      <ul className="Header__statistics-wrap">
        {this.renderItem()}
      </ul>
    );
  }
}
