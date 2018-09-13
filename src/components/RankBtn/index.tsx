import * as React from 'react';

export interface RankBtnProps {
  hander_rank_btn: any;
}

export default class RankBtn extends React.Component<RankBtnProps, any> {
  public render() {
    let { hander_rank_btn } = this.props;
    return (
      <ul className="Header__to-ranking" onClick={hander_rank_btn}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAByFBMVEVMaXH5xRP5xRP7wRP8vxP6xBP5xRP+2DL81Sv8vxP7wBP7wBP8vhP6wxP5xRP6xBP8vxP8vhP7whP6wxP7whP5xhP8vxP7wBP8vxP7wBP7wBP7wRP8vxP7wRP7wRP6xBP7wBP6xBP5xhP5xhP/3Dr5xhP/3Dr5xhP/2zj+2jX/2zj5xxP+2DL5xhP5xxP4yBP+2jX5xxP4yBP+2DL4yRP5xxP5xxP4yBP5xxP81Sv4yRP4yBP4yxb4yBP+2DL4yxb4yRP4yBP4yxb4yBP4yRP81Cj81Sv4yxb4yRP5zBn70SL70iX5zhz5zBn4yRP5zBn4yxb70iX81Cj4yRP4yxb5zBn6zx/4yRP91y75zBn4yxb6zx/70SL5zhz81Cj70iX70SL5zhz81Cj6zx/5zhz81Sv81Sv70iX5zBn4yxb81Cj81Sv5zhz5zBn81Cj70iX70iX70SL70SL6zx/70iX6zx/5zhz81Cj70SL5zhz5zBn6zx/5zBn4yxb5zhz91y781Sv70iX/3Dr/2zj+2jX+2DL81Cj70SL6zx/5zhz5zBn8vhP4yRP4yxb4yBP5xxP8vxP5xhP5xRP7wBP7wRP6xBP7whP6wxOtc2Y5AAAAf3RSTlMAcv0PgSz6cGDXD1KvcGXC5596YGXQ5syOEtva/gbEM125ecuXFn9zmZCA9MESfvl/8PyvcgUD+3SfxsbBGGkIYhKqvM9JjrTVHu0ecAsU9wz8MA660bHL8A/AS5U47BZW4fC1A+jyzmEB3vBXEfkJuNRnmCbGRwOHAVE83KvUxnU0JAAAAQhJREFUGBl1wQNDxGAABuA3bpdt27Yu27ZtG7c0tK26hb9bq7u2r9bzQJVwTUqCXcoNKQ12qbekHKioTxl3pHyKoqpw9Y9hWBZoutRCaqTpxTXMTgIN96ReHG2uYomZQhtD6NnCPrONcXYaaGX1doBd9hhj3BwwyOntAQfcGeZn+Am083rrOOQvT4BlYaCjRdDpGtk4F04BrPRLTeYKSVPbPSpdQNXZLJYViJrqenGoD18qy+Vs+UdesVxXA5vCrPRHTW5JETSJcYHP3+KTM/GLg6PVanX1goFo79dYFxjyfPeHMb+3ABhyCn+JisRfoTFhiqIEu7uBEGIKerKJ8DE5Q+PxoOcL1Qd5RLICJGFsaQAAAABJRU5ErkJggg=="
          className="Header__cup-pic"
        />
        查看榜单
      </ul>
    );
  }
}
