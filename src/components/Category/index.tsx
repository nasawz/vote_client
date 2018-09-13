import * as React from 'react';

export interface CategoryProps {
  categories: any;
}

export default class Category extends React.Component<CategoryProps, any> {
  public render() {
    let {} = this.props;
    return (
      <ul className="Header__statistics-wrap">
        <li className="Header__statistics-item">
          <span className="Header__font">1</span> <br />
          <span className="Header__label-content">参与选手</span>
        </li>
        <li className="Header__statistics-item">
          <span className="Header__font">1</span> <br />
          <span className="Header__label-content">累计投票</span>
        </li>
        <li className="Header__statistics-item">
          <span className="Header__font">9</span> <br />
          <span className="Header__label-content">累计访问</span>
        </li>
      </ul>
    );
  }
}
