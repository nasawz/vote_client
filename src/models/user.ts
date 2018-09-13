import { touch } from '../api';

export const user = {
  state: {},
  reducers: {
    setData(state, payload) {
      return payload;
    }
  },
  effects: (dispatch) => ({
    async getUserAsync(activityId, rootState) {
      try {
        let res = await touch();
        let user = res.data;
        dispatch.user.setData(user);
        return user;
      } catch {
        return null;
      }
    }
  })
};
