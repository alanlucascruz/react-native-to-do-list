import {configureStore} from '@reduxjs/toolkit';
import list from './reducers/listSlice';

export default configureStore({
  reducer: {
    list,
  },
});
