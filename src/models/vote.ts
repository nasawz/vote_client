import {
  getVoteItem,
  getVoteItems,
  getMyVoteItem,
  delVoteItem,
  addVote,
  addVoteItem
} from '../api';
import { IOrder } from '../api';
import _ from 'lodash';

export interface IQueryItemsParams {
  activityId: string;
  limit: number;
  skip: number;
  order: IOrder;
  category: string;
}

export interface IQueryItemParams {
  activityId: string;
  id: string;
}

export interface ICreateItemParams {
  activityId: string;
  data: object;
}

export const vote = {
  state: {
    vote_item: null,
    curr_category: '',
    vote_items: [],
    vote_items_skip: 0,
    my_vote_item: null,
    rank_list: [],
    rank_list_skip: 0
  },
  reducers: {
    setCategory(state, payload) {
      return Object.assign({}, state, { curr_category: payload });
    },
    setVoteItem(state, payload) {
      return Object.assign({}, state, { vote_item: payload });
    },
    clearVoteItem(state, payload) {
      return Object.assign({}, state, { vote_item: null });
    },
    setVoteItems(state, payload) {
      let items = _.map(payload, (item) => {
        return item.toJSON();
      });
      return Object.assign({}, state, { vote_items: _.concat(state.vote_items, items) });
    },
    setVoteItemsSkip(state, payload) {
      return Object.assign({}, state, { vote_items_skip: payload });
    },
    clearVoteItems(state, payload) {
      return Object.assign({}, state, { vote_items: [], vote_items_skip: 0 });
    },
    setMyVoteItem(state, payload) {
      return Object.assign({}, state, { my_vote_item: payload });
    },
    incrementScore(state, payload) {
      if (state.my_vote_item && state.my_vote_item.objectId == payload) {
        state.my_vote_item.score++;
      }
      if (state.vote_item && state.vote_item.objectId == payload) {
        state.vote_item.score++;
      }
      _.map(state.vote_items, (item) => {
        if (item.objectId == payload) {
          item.score++;
        }
      });
      return Object.assign({}, state, {
        vote_items: state.vote_items,
        vote_item: state.vote_item,
        my_vote_item: state.my_vote_item
      });
    },
    setRankList(state, payload) {
      return Object.assign({}, state, { rank_list: _.concat(state.rank_list, payload) });
    },
    setRankListSkip(state, payload) {
      return Object.assign({}, state, { rank_list_skip: payload });
    },
    clearRankList(state, payload) {
      return Object.assign({}, state, { rank_list: [], rank_list_skip: 0 });
    }
  },
  effects: (dispatch) => ({
    /**
     * 获取投票详情
     * @param id
     * @param rootState
     */
    async getVoteItemAsync(params: IQueryItemParams, rootState) {
      try {
        let res = await getVoteItem(params.activityId, params.id);
        let item = res.data;
        dispatch.vote.setVoteItem(item);
        return item;
      } catch (error) {
        return null;
      }
    },
    /**
     * 获取投票列表
     * @param params
     * @param rootState
     */
    async getVoteItemsAsync(params: IQueryItemsParams, rootState) {
      try {
        let items = await getVoteItems(
          params.activityId,
          params.limit,
          params.skip,
          params.order,
          params.category
        );
        dispatch.vote.setVoteItems(items);
        return items;
      } catch (error) {
        return null;
      }
    },
    /**
     * 获取我的作品
     * @param activityId
     * @param rootState
     */
    async getMyVoteItemAsync(activityId, rootState) {
      try {
        let res = await getMyVoteItem(activityId);
        let vote_item = res.data;
        dispatch.vote.setMyVoteItem(vote_item);
        return vote_item;
      } catch (error) {
        return null;
      }
    },
    /**
     * 删除我的作品
     * @param params: activityId, id
     * @param rootState
     */
    async delMyVoteItemAsync(params: IQueryItemParams, rootState) {
      try {
        let res = await delVoteItem(params.activityId, params.id);
        let vote_item = res.data;
        dispatch.vote.setMyVoteItem(null);
        return vote_item;
      } catch (error) {
        return null;
      }
    },
    /**
     * 投票
     * @param params: activityId, id
     * @param rootState
     */
    async addVoteAsync(params: IQueryItemParams, rootState) {
      try {
        let res = await addVote(params.activityId, params.id);
        let vote = res.data;
        dispatch.vote.incrementScore(params.id);
        return vote;
      } catch (error) {
        return null;
      }
    },
    /**
     * 提交作品
     * @param params
     * @param rootState
     */
    async addVoteItemAsync(params: ICreateItemParams, rootState) {
      try {
        let res = await addVoteItem(params.activityId, params.data);
        return res.data;
      } catch (error) {
        return null;
      }
    }
  })
};
