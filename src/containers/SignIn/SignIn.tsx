import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import { setUserName } from '../../redux/common/common.action';
import { changeLang } from '../../redux/lang/lang.action';
import { setLogin, setPassword } from '../../redux/signIn/signIn.action';
import { ILangReducer } from '../../redux/lang/lang.reducer';
import { ISignInReducer, signIn } from '../../redux/signIn/signIn.reducer';

/* tslint:disable:variable-name */
const SignInWrapper = styled.div`
  // some styles
`;

/* tslint:enable:variable-name */

interface IProps {
    loginPlaceholder?: string;
    passwordPlaceholder?: string;
    formAction?: any;
    login?: string;
    password?: string;
    // setUserName?: (value: string) => void;
}

class SignIn extends React.Component<IProps> {
    public constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setLogin = this.setLogin.bind(this);
    }

    public render(): JSX.Element {
        const {loginPlaceholder} = this.props;
        const {passwordPlaceholder} = this.props;
        const {login} = this.props;
        const {password} = this.props;
        return (
            <SignInWrapper>
                <form className={'sinIn-block__signIn-form'}>
                    <Input
                        text={login}
                        placeholder={loginPlaceholder}
                        onChange={this.setLogin}
                    />

                    <Input
                        text={password}
                        type={'password'}
                        placeholder={passwordPlaceholder}
                    />
                </form>
                <Button text={'Sign In'} onClick={this.onSubmit}/>
                <Button text={'Back'}/>
            </SignInWrapper>
        );
    }

    public onSubmit(values): void {
        console.log(values);
    }

    private validate(value) {
        console.log(value);
        return [];
    }

    private setLogin(event): void {
        setLogin(event.target.value);
    }
}

const mapStateToProps = (state: { lang: ILangReducer, signIn: ISignInReducer }) => {
    return {
        loginPlaceholder: state.lang.langObject['signIn.login'][state.lang.lang],
        passwordPlaceholder: state.lang.langObject['signIn.password'][state.lang.lang],
        login: state.signIn.login,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        formAction(login: string) {
            dispatch(setLogin(login));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
