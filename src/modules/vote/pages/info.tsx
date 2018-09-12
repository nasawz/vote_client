import * as React from 'react';
import { connect } from 'react-redux';

export interface InfoProps {}

class Info extends React.Component<InfoProps, any> {
  public render() {
    return <div>Info</div>;
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(Info);
