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
      let activity = await getActivity(activityId);
      dispatch.activity.setData(activity.toJSON());
      return activity.toJSON();
    }
  })
};
