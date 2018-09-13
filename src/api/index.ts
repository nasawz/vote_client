import Parse from './parse';
import axios from 'axios';
declare let window;

export const getActivity = (activityId) => {
  //   var pipeline = [{ group: { objectId: null, total: { $sum: '$score' } } }];
  //   var query1 = new Parse.Query('vote_item');
  //   query1
  //     .aggregate(pipeline)
  //     .then(function(results) {
  //       console.log(results);
  //       console.log('---------');
  //       // results contains sum of score field and stores it in results[0].total
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //       console.log('---------');
  //       // There was an error.
  // });

  const Activity = Parse.Object.extend('activity');
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

export const delVoteItem = (activityId, id) => {
  return axios.post(`/api/vote/delVoteItem/${activityId}/${id}`);
};

export interface IOrder {
  key;
  type;
}

export const getVoteItems = (
  activityId,
  limit = 10,
  skip = 0,
  order: IOrder = { key: 'createAt', type: 'desc' },
  category = null
) => {
  const Activity = Parse.Object.extend('activity');
  let activity = new Activity();
  activity.id = activityId;
  const VoteItem = Parse.Object.extend('vote_item');
  const query = new Parse.Query(VoteItem);
  query.equalTo('activity', activity);
  query.limit(limit);
  query.skip(skip);
  if (category) {
    query.equalTo('category', category);
  }
  if (order.type == 'desc') {
    query.descending(order.key);
  } else {
    query.ascending(order.key);
  }
  return query.find();
};

export const getVoteItem = (id) => {
  const VoteItem = Parse.Object.extend('vote_item');
  const query = new Parse.Query(VoteItem);
  query.equalTo('id', id);
  return query.first();
};
