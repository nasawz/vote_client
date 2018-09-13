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
      touch()
        .then((res) => {
          dispatch.user.setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  })
};
