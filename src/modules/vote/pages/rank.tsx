import * as React from 'react';
import { connect } from 'react-redux';
// import Auth from '../../../components/auth';
// import Paper from '../../../components/paper';
export interface RankProps {}

class Rank extends React.Component<RankProps, any> {
  public render() {
    return <div>Rank</div>;
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(Rank);
