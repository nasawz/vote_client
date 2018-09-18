import React from 'react';
import { ActivityIndicator } from 'antd-mobile';

function Loading(props) {
  return (
    <div className="loading-data">
      <ActivityIndicator text="加载中..." />
    </div>
  );
}

export default Loading;
