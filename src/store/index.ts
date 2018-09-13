import { init } from '@rematch/core';
import { svModel } from '../models/svModel';
import { activity } from '../models/activity';

const store = init({
  models: {
    activity
  }
});

export default store;
