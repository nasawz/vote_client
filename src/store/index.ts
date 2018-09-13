import { init } from '@rematch/core';
import { activity } from '../models/activity';
import { vote } from '../models/vote';
import { user } from '../models/user';

const store = init({
  models: {
    activity,
    vote,
    user
  }
});

export default store;
