import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import { setLogin, setPassword, setEmail, setRepeat } from '../../redux/signUp/signUp.action';
import { ILangReducer } from '../../redux/lang/lang.reducer';
import { ISignUpReducer, signUp } from '../../redux/signUp/signUp.reducer';
import { IValidatorReducer } from '../../redux/validator/validation.reducer';
import userService from '../../service/UserService/UserService';
import validator from '../../modules/Validator';
import { ChangeEvent } from 'react';
import { setSignUpEmailError, setSignUpLoginError, setSignUpPasswordError, setSignUpRepeatError } from '../../redux/validator/validation.action';

/* tslint:disable:variable-name */
const SignUpWrapper = styled.div`
  // some styles
`;

/* tslint:enable:variable-name */

interface ISignInError {
    loginError?: string;
    passwordError?: string;
    emailError?: string;
    repeatError?: string;
}

interface IProps {
    loginPlaceholder?: string;
    passwordPlaceholder?: string;
    emailPlaceholder?: string;
    repeatPlaceholder?: string;
    setLogin?: (login: string) => void;
    setPassword?: (password: string) => void;
    setEmail?: (email: string) => void;
    setRepeat?: (repeat: string) => void;
    setLoginError?: (wrong: boolean) => void;
    setPasswordError?: (wrong: boolean) => void;
    setEmailError?: (wrong: boolean) => void;
    setRepeatError?: (wrong: boolean) => void;
    login?: string;
    password?: string;
    email?: string;
    repeat?: string;
    hasLoginError?: string;
    hasPasswordError?: string;
    hasEmailError?: string;
    hasRepeatError?: string;
}

class SignIn extends React.Component<IProps> {
    private errors: ISignInError = {
        loginError: '',
        passwordError: '',
        emailError: '',

    };

    public constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setRepeat = this.setRepeat.bind(this);
        this.loginWithEnter = this.loginWithEnter.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    public render(): JSX.Element {
        const {loginPlaceholder} = this.props;
        const {passwordPlaceholder} = this.props;
        const {emailPlaceholder} = this.props;
        const {repeatPlaceholder} = this.props;
        const {login} = this.props;
        const {password} = this.props;
        const {repeat} = this.props;
        const {email} = this.props;
        const {hasLoginError} = this.props;
        const {hasPasswordError} = this.props;
        const {hasEmailError} = this.props;
        const {hasRepeatError} = this.props;

        return (
            <SignUpWrapper>
                <form className={'sinUp-block__signUp-form'}>
                    {hasLoginError ? <Label text={this.errors.loginError}/> : ''}
                    <Input
                        text={login}
                        placeholder={loginPlaceholder}
                        onChange={this.setLogin}
                        className={'signUp-form__login-input'}
                        onBlur={this.validateInput}
                    />
                    {hasEmailError ? <Label text={this.errors.passwordError}/> : ''}
                    <Input
                        text={email}
                        placeholder={emailPlaceholder}
                        onChange={this.setEmail}
                        className={'signUp-form__email-input'}
                        onBlur={this.validateInput}
                    />
                    {hasPasswordError ? <Label text={this.errors.passwordError}/> : ''}
                    <Input
                        text={password}
                        type={'password'}
                        placeholder={passwordPlaceholder}
                        onChange={this.setPassword}
                        className={'signUp-form__password-input'}
                        onBlur={this.validateInput}
                    />
                    {hasRepeatError ? <Label text={this.errors.repeatError}/> : ''}
                    <Input
                        text={repeat}
                        type={'password'}
                        placeholder={repeatPlaceholder}
                        onChange={this.setRepeat}
                        className={'signUp-form__repeat-input'}
                        onBlur={this.validateInput}
                    />
                </form>
                <Button text={'Sign Up'} onClick={this.onSubmit} main={true}/>
                <Button text={'Back'}/>
            </SignUpWrapper>
        );
    }

    public onSubmit(): void {
        const event = new Event('blur');
        document.querySelector('.signUn-form__login-input').dispatchEvent(event);
        document.querySelector('.signUn-form__password-input').dispatchEvent(event);
        document.querySelector('.signUn-form__email-input').dispatchEvent(event);
        document.querySelector('.signUn-form__repeat-input').dispatchEvent(event);
        if (!this.props.hasLoginError && !this.props.hasPasswordError
            && !this.props.hasEmailError && !this.props.hasRepeatError) {
            const requestBody = {
                login: this.props.login,
                password: this.props.password,
            };
            userService.logIn(requestBody)
                .then((ans) => {
                    if (ans !== 'ok') {
                        this.errors.loginError = ans.What || 'Internal error';
                        this.props.setLoginError(true);
                    }
                });
        }
    }

    public componentWillMount(): void {
        window.addEventListener('keypress', this.loginWithEnter);
    }

    public componentWillUnmount(): void {
        window.removeEventListener('keypress', this.loginWithEnter);
    }

    private loginWithEnter(event) {
        if (event.keyCode === 13 && event.type === 'keypress') {
            this.onSubmit();
        }
    }

    private validateInput(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.className.match(/login/ig)) {
            this.props.setLoginError(false);
            this.errors.loginError = validator.validateLogin(event.target.value);
            if (this.errors.loginError) {
                this.props.setLoginError(true);
            }
        } else if (event.target.className.match(/password/ig)) {
            this.props.setPasswordError(false);
            this.errors.passwordError = validator.validatePassword(event.target.value);
            if (this.errors.passwordError) {
                this.props.setPasswordError(true);
            }
        } else if (event.target.className.match(/email/ig)) {
            this.props.setEmailError(false);
            this.errors.emailError = validator.validateEmail(event.target.value);
            if (this.errors.emailError) {
                this.props.setEmailError(true);
            }
        } else if (event.target.className.match(/repeat/ig)) {
            this.props.setRepeatError(false);
            this.errors.emailError = validator.validateRepeat(event.target.value,
                document.querySelector('.signUn-form__password-input').innerHTML.toString());
            if (this.errors.repeatError) {
                this.props.setRepeatError(true);
            }
        }
    }

    private setLogin(event: ChangeEvent<HTMLInputElement>): void {
        this.props.setLogin(event.target.value);
    }

    private setPassword(event: ChangeEvent<HTMLInputElement>): void {
        this.props.setPassword(event.target.value);
    }

    private setEmail(event: ChangeEvent<HTMLInputElement>): void {
        this.props.setEmail(event.target.value);
    }

    private setRepeat(event: ChangeEvent<HTMLInputElement>): void {
        this.props.setRepeat(event.target.value);
    }
}

const mapStateToProps = (state: { lang: ILangReducer, signUp: ISignUpReducer, validator: IValidatorReducer }) => {
    return {
        loginPlaceholder: state.lang.langObject['signIn.login'][state.lang.lang],
        passwordPlaceholder: state.lang.langObject['signIn.password'][state.lang.lang],
        emailPlaceholder: state.lang.langObject['signUp.email'][state.lang.lang],
        repeatPlaceholder: state.lang.langObject['signUp.repeatPassword'][state.lang.lang],
        login: state.signUp.login,
        password: state.signUp.password,
        email: state.signUp.email,
        repeat: state.signUp.passwordRepeat,
        hasLoginError: state.validator.signInLoginError,
        hasPasswordError: state.validator.signInPasswordError,
        hasEmailError: state.validator.signUpEmailError,
        hasRepeatError: state.validator.signUpRepeatError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLogin(login: string) {
            dispatch(setLogin(login));
        },
        setPassword(password: string) {
            dispatch(setPassword(password));
        },
        setEmail(email: string) {
            dispatch(setEmail(email));
        },
        setRepeat(repeat: string) {
            dispatch(setRepeat(repeat));
        },
        setLoginError(wrong: boolean) {
            dispatch(setSignUpLoginError(wrong));
        },
        setPasswordError(wrong: boolean) {
            dispatch(setSignUpPasswordError(wrong));
        },
        setEmailError(wrong: boolean) {
            dispatch(setSignUpEmailError(wrong));
        },
        setRepeatError(wrong: boolean) {
            dispatch(setSignUpRepeatError(wrong));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
