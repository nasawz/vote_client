import { init } from '@rematch/core';
import { svModel } from '../models/svModel';

const store = init({
  models: {
    svModel
  }
});

export default store;
