import { ValidatorActionTypes } from './validation.reducer';

export function setSignInLoginError(error: boolean) {
    return {
        type: ValidatorActionTypes.SET_SIGNIN_LOGIN_ERROR,
        data: error,
    };
}

export function setSignInPasswordError(error: boolean) {
    return {
        type: ValidatorActionTypes.SET_SIGNIN_PASSWORD_ERROR,
        data: error,
    };
}