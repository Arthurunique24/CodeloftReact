import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import UserInfo from '../../components/UserInfo/UserInfo';
import userService from '../../service/UserService/UserService';
import { ICommonReducer } from '../../redux/common/common.reducer';
import '../../statics/scss/user-page.scss';

/* tslint:disable:variable-name */
const ProfileWrapper = styled.div`
  // some styles
`;
/* tslint:enable:variable-name */

interface IProps {
    username?: string;
    email?: string;
    score?: string;
}

interface IState {

}

class Profile extends React.Component<IProps, IState> {
    public constructor(props) {
        super(props);

        // this.customOnClick = this.customOnClick.bind(this);
    }

    public render(): JSX.Element {
        return (
            <ProfileWrapper>
                <img src='../statics/imgs/user-default.jpg' className={ 'profile-block__avatar' }/>
                <UserInfo
                    className={ 'profile-block__user-info' }
                    user={ userService.getUserInfo('login') }
                    email={ userService.getUserInfo('email') }
                    score={ userService.getUserInfo('score') }
                />
                <Button text={ 'Back' }/>
                <Button text={ 'LogOut' }/>
            </ProfileWrapper>
        );
    }

    // private customOnClick(event) {
    //   const {text, setUserName} = this.props;
    //   setUserName(text);
    // }
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);