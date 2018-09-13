import { getActivity } from '../api';

declare let window;

export const activity = {
  state: {},
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
