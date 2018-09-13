import { getVoteItem } from '../api';

export const vote = {
  state: {
    vote_item: null
  },
  reducers: {
    setVoteItem(state, payload) {
      return Object.assign({}, state, { vote_item: payload });
    },
    cleanVoteItem(state, payload) {
      return Object.assign({}, state, { vote_item: null });
    }
  },
  effects: (dispatch) => ({
    async getVoteItemAsync(id, rootState) {
      getVoteItem(id)
        .then((res) => {
          dispatch.vote.setVoteItem(res.toJSON());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  })
};
