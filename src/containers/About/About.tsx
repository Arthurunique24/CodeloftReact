import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import { ICommonReducer } from '../../redux/common/common.reducer';
import Label from "../../components/Label/Label";

/* tslint:disable:variable-name */
const MainWrapper = styled.div`
  // some styles
`;
/* tslint:enable:variable-name */

interface IProps {
  text?: string;
}

interface IState {

}

class About extends React.Component<IProps, IState> {
  public constructor(props) {
    super(props);

    // this.customOnClick = this.customOnClick.bind(this);
  }

  public render(): JSX.Element {
    return (
        <MainWrapper>
          <Label text={'In our game you will play for a motorcyclist, ' +
          'which leaves a bright trace. Other players or bots will also draw ' +
          'a line for themselves, and your task is to avoid contact with this line, ' +
          'regardless of whether it\'s yours or not. Also, in order to win, you must draw a ' +
          'line so that opponents can not avoid your trace. On the playing field will be spawned ' +
          'various bonuses that will help you win. So do not yawn!'}/>
          <Button text={ 'Back' } />
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
