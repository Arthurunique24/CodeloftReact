import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import { ICommonReducer } from '../../redux/common/common.reducer';
import { Form, Field } from 'react-final-form';
import { setUserName } from '../../redux/common/common.action';
import { ILangReducer, changeLang } from '../../redux/lang/lang.action';

/* tslint:disable:variable-name */
const SignInWrapper = styled.div`
  // some styles
`;

/* tslint:enable:variable-name */

interface IProps {
    loginPlaceholder?: string;
    passwordPlaceholder?: string;
    formAction?: any;
    // text?: string;
    // username?: string;
    // setUserName?: (value: string) => void;
}

class SignIn extends React.Component<IProps> {
    public constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    public render(): JSX.Element {
        const {loginPlaceholder} = this.props;
        return (
            <SignInWrapper>
                <Form
                    onSubmit={this.onSubmit}
                    render={() => (
                        <Input placeholder={loginPlaceholder} onclick={this.onSubmit}/>)}
                />
                <Button text={'Back'}/>
            </SignInWrapper>
        );
    }

    private validate(value) {
        console.log(value);
        return [];
    }

    private onSubmit(data) {
        alert(JSON.stringify(data));
    }
}

const mapStateToProps = (state: { lang: ILangReducer; }) => {
    return {
        loginPlaceholder: state.lang.signIn.loginPlaceholder,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
