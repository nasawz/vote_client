import Parse from './parse';

export const getActivity = (activityId) => {
  const Activity = Parse.Object.extend('activity');
  const query = new Parse.Query(Activity);
  query.equalTo('objectId', activityId);
  return query.first();
};
