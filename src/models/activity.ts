import { getActivity } from '../api';

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
      getActivity(activityId)
        .then((res) => {
          dispatch.activity.setData(res.toJSON());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  })
};
