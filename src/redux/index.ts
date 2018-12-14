import { combineReducers } from 'redux';

import { common } from './common/common.reducer';
import { lang } from './lang/lang.reducer';
import { signIn } from './signIn/signIn.reducer';

export default combineReducers({
    common,
    lang,
    signIn,
});
