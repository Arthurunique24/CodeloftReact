import { SET_INPUT_DATA, SET_LOADING, SET_USER } from '../common/common.constants';
import langService from '../../service/LangService/LangService';
import * as types from '../../store/types';
import { ISingIn } from 'customTypes';

const langJSON = require('../../lang.json');

enum LangActionTypes {
    SET_LANG = 'SET_LANG',
    SET_LOGIN_PLACEHOLDER = 'SET_LOGIN_PLACEHOLDER',
    SET_PASSWORD_PLACEHOLDER = 'SET_PASSWORD_PLACEHOLDER',
}

export interface ILangReducer {
    lang: string;
    signIn: ISingIn;
}

const initialState: ILangReducer = {
    lang: 'ru',
    signIn: {
        loginPlaceholder: langJSON['signIn.login'][langService.getLang()],
        passwordPlaceholder: langJSON['signIn.password'][langService.getLang()],
    },
    // loginPlaceholder: '111',// langJSON['signIn.login'][langService.getLang()],
    // passwordPlaceholder: '111',// langJSON['signIn.password'][langService.getLang()],
};

export function changeLang(lang: string) {
    return {
        type: LangActionTypes.SET_LANG,
        data: lang,
    };
}

export function lang(state: ILangReducer = initialState, action: any) {
    switch (action.type) {
        case LangActionTypes.SET_LANG:
            return {
                ...state,
                lang: action.data,
            };
        case LangActionTypes.SET_LOGIN_PLACEHOLDER:
            return {
                ...state,
                loginPlaceholder: action.loginPlaceholder,
            };
        default:
            return state;
    }
}
