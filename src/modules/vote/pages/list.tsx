import * as React from 'react';
import { connect } from 'react-redux';
import Auth from '../../../components/auth';
import Paper from '../../../components/paper';
export interface ListProps {}

class List extends React.Component<ListProps, any> {
  public render() {
    return (
      <div>
        demo
        {/* <Paper>
          <Auth />
        </Paper> */}
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(List);
