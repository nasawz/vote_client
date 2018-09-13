import { getActivity } from '../api';

declare let window;

export const activity = {
  state: {
    title: 'vote',
    desc: '',
    kv: '',
    primary_color: '',
    status: 0
  },
  reducers: {
    setData(state, payload) {
      return payload;
    }
  },
  effects: (dispatch) => ({
    async getDataAsync(activityId, rootState) {
      if (window.activity) {
        dispatch.activity.setData(window.activity.toJSON());
      } else {
        getActivity(activityId)
          .then((res) => {
            window.activity = res;
            console.log(res);
            dispatch.activity.setData(res.toJSON());
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  })
};
