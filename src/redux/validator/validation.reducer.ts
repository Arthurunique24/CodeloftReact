export enum ValidatorActionTypes {
    SET_SIGNIN_LOGIN_ERROR = 'SET_SIGNIN_LOGIN_ERROR',
    SET_SIGNIN_PASSWORD_ERROR = 'SET_SIGNIN_PASSWORD_ERROR',
}

export interface IValidatorReducer {
    signInLoginError?: boolean;
    signInPasswordError?: boolean;
    signUnLoginError?: boolean;
    signUnPasswordError?: boolean;
    signUnEmailError?: boolean;
}

const initialState: IValidatorReducer = {
    signInLoginError: false,
    signInPasswordError: false,
    signUnLoginError: false,
    signUnPasswordError: false,
    signUnEmailError: false,
};

export function validator(state: IValidatorReducer = initialState, action: any) {
    switch (action.type) {
        case ValidatorActionTypes.SET_SIGNIN_LOGIN_ERROR:
            return {
                ...state,
                signInLoginError: action.data,
            };
        case ValidatorActionTypes.SET_SIGNIN_PASSWORD_ERROR:
            return {
                ...state,
                signInPasswordError: action.data,
            };
        default:
            return state;
    }
}
