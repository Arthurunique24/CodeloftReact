import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Image from '../../components/Img/Img';
import { ICommonReducer } from '../../redux/common/common.reducer';
import { setUserName } from '../../redux/common/common.action';

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
          <Image imgSrc={ '../statics/imgs/user-default.jpg' } imgClass={ '' }/>
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
