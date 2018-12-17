import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import UserInfo from '../../components/UserInfo/UserInfo';
import userService from '../../service/UserService/UserService';
import '../../statics/scss/user-page.scss';
import { ILangReducer } from '../../redux/lang/lang.reducer';
import { PATHS } from '../../routes';
import { Link } from 'react-router-dom';

/* tslint:disable:variable-name */
const ProfileWrapper = styled.div`
  // some styles
`;
/* tslint:enable:variable-name */

interface IProps {
    username?: string;
    email?: string;
    score?: string;
    backText?: string;
    logOutText?: string;
}

interface IState {

}

class Profile extends React.Component<IProps, IState> {
    public constructor(props) {
        super(props);

        // this.customOnClick = this.customOnClick.bind(this);
    }

    public render(): JSX.Element {
        const {backText} = this.props;
        const {logOutText} = this.props;

        return (
            <ProfileWrapper>
                <img src='../statics/imgs/user-default.jpg' className={ 'profile-block__avatar' }/>
                <UserInfo
                    className={ 'profile-block__user-info' }
                    user={ userService.getUserInfo('login') }
                    email={ userService.getUserInfo('email') }
                    score={ userService.getUserInfo('score') }
                />
                <Button text={ logOutText }/>
                <Button
                    link={<Link to={PATHS.MENU} className={'button'}>{backText}</Link>}
                />
            </ProfileWrapper>
        );
    }
}

const mapStateToProps = (state: { lang: ILangReducer }) => {
    return {
        backText: state.lang.langObject['buttonBack'][state.lang.lang],
        logOutText: state.lang.langObject['profile.logOut'][state.lang.lang],
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);