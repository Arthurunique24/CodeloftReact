import * as types from './types';

export function setUserName(text: string): (dispatch) => void {
    return async dispatch => {
        dispatch(setAboutText({text}));
    };
}

export function setAboutText(text) {
    return {
        type: types.RULES_RELOAD,
        data: text,
    };
}
