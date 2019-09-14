import Parse from './parse';
import axios from 'axios';
declare let window;

export const getActivity = (activityId) => {
  const Activity = Parse.Object.extend('vote_activity');
  const query = new Parse.Query(Activity);
  query.equalTo('objectId', activityId);
  return query.first();
};

export const getMyVoteItem = (activityId) => {
  return axios.get(`/api/vote/myVoteItem/${activityId}`);
};

export const addVoteItem = (activityId, data) => {
  return axios.post(`/api/vote/addVoteItem/${activityId}`, data);
};

export const addVote = (activityId, id) => {
  return axios.post(`/api/vote/addVote/${activityId}/${id}`);
};

export const analysisShare = (userId, activityId, url, parentId) => {
  // return axios.post(`/api/analysis/share`, { userId, activityId, url, parentId });
};

export const delVoteItem = (activityId, id) => {
  return axios.delete(`/api/vote/delVoteItem/${activityId}/${id}`);
};

export interface IOrder {
  key;
  type;
}

export const getVoteItems = (
  activityId,
  limit = 10,
  skip = 0,
  order: IOrder = { key: 'createdAt', type: 'desc' },
  category = null,
  search = null
) => {
  const Activity = Parse.Object.extend('vote_activity');
  let activity = new Activity();
  activity.id = activityId;
  const VoteItem = Parse.Object.extend('vote_item');
  const query = new Parse.Query(VoteItem);
  query.equalTo('activity', activity);
  query.equalTo('status', 0);
  if (category) {
    query.equalTo('category', category);
  }
  if (search) {
    query.fullText('title', search);
  }
  if (order.type == 'desc') {
    query.descending(order.key);
  } else {
    query.ascending(order.key);
  }
  query.skip(skip);
  query.limit(limit);
  return query.find();
};

export const getVoteItem = (activityId, id) => {
  return axios.get(`/api/vote/voteItem/${activityId}/${id}`);
};

export const getRankList = (activityId, limit, skip, category) => {
  return axios.get(`/api/vote/voteItems/${activityId}`, {
    params: {
      limit,
      skip,
      category
    }
  });
};

export const touch = () => {
  return axios.get(`/api/user/touch`);
};

export const getJsConfig = (activityId, url) => {
  // return axios.post(`/api/wx/jsconfig/${activityId}`, { url });
  return axios.post(`/api/wx/jsconfig/xGY6o7uncr`, { url });
};
