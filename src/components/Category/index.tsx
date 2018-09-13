import * as React from 'react';

export interface CategoryProps {
  categories: [];
}

export default class Category extends React.Component<CategoryProps, any> {
  public render() {
    let { categories } = this.props;
    return (
      <ul className="Header__statistics-wrap">
        {categories.map((category) => (
          <li className="Header__statistics-item">
            <span className="Header__font">1</span> <br />
            <span className="Header__label-content">{category}</span>
          </li>
        ))}
      </ul>
    );
  }
}
