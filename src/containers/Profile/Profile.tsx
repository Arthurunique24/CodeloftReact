import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Image from '../../components/Img/Img';
import UserInfo from '../../components/UserInfo/UserInfo';
import { ICommonReducer } from '../../redux/common/common.reducer';
import { setUserName } from '../../redux/common/common.action';
import '../../statics/scss/user-page.scss'

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
          <Image imgSrc={ '../statics/imgs/user-default.jpg' } className={ 'profile-block__avatar' }/>
          <UserInfo className={ 'profile-block__user-info' } user={ 'Asd' } email={ 'asd@asd.com' } score={ '100' }/>
          <Button className={ 'button' } text={ 'Back' }/>
          <Button className={ 'button' } text={ 'LogOut' }/>
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
