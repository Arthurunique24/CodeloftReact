import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import { ICommonReducer } from '../../redux/common/common.reducer';
import {Form} from 'react-final-form';
import { setUserName } from '../../redux/common/common.action';

/* tslint:disable:variable-name */
const SignInWrapper = styled.div`
  // some styles
`;

/* tslint:enable:variable-name */

interface IProps {
    // text?: string;
    // username?: string;
    // setUserName?: (value: string) => void;
}

interface IState {

}

class SignIn extends React.Component<IProps, IState> {
    public constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    public render(): JSX.Element {
        return (
            <SignInWrapper>
                <Form
                    onSubmit={this.onSubmit}
                    render={() => <Input/>}
                >
                </Form>
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

const mapStateToProps = (state: { common: ICommonReducer; }) => {
    return {
        // username: state.common.userData.name,
        // text: state.common.inputData.value,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // setUserName(value: string) {
        //   dispatch(setUserName(value));
        // },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
