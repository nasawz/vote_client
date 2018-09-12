import * as React from 'react';
import { connect } from 'react-redux';

export interface EnrollProps {}

class Enroll extends React.Component<EnrollProps, any> {
  public render() {
    return <div>enroll</div>;
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(Enroll);
