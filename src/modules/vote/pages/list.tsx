import * as React from 'react';
import { connect } from 'react-redux';
import Auth from '../../../components/auth';
import Paper from '../../../components/paper';
export interface ListProps {}

import Parse from '../../../api/parse';

class List extends React.Component<ListProps, any> {
  onchange(e) {
    /**
     * 上传文件的例子
     */
    // let file = e.target.files[0];
    // let name = file.name;
    // let parseFile = new Parse.File(name, file);
    // parseFile.save().then(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  public render() {
    return (
      <div>
        <input type="file" name="file" id="" onChange={this.onchange.bind(this)} />
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
