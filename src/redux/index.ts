import { combineReducers } from 'redux';

import { common } from './common/common.reducer';
import { lang } from './lang/lang.action';

export default combineReducers({
  common,
  lang,
});
