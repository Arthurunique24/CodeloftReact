import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { ICommonReducer } from '../../redux/common/common.reducer';
import { setUserName } from '../../redux/common/common.action';

/* tslint:disable:variable-name */
const MainWrapper = styled.div`
  // some styles
`;
/* tslint:enable:variable-name */

interface IProps {
  text?: string;
  // username?: string;
  // setUserName?: (value: string) => void;
}

interface IState {

}

class Main extends React.Component<IProps, IState> {
  public constructor(props) {
    super(props);
    
    // this.customOnClick = this.customOnClick.bind(this);
  }
  
  public render(): JSX.Element {
    return (
      <MainWrapper>
        { /*<span>{ this.props.username || 'Пусто' }</span>*/ }
        { /*<Input placeholder={''}/>*/ }
        <Button text={ 'Single Player' } /*onClick={ this.customOnClick }*/ />
        <Button text={ 'Multi Player' }/>
        <Button text={ 'Rules' } />
        <Button text={ 'High Score' } />
        <Button text={ 'Profile' } />
        <Button text={ 'Chat' } />
      </MainWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
