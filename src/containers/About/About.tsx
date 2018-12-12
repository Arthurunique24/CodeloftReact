import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import { ICommonReducer } from '../../redux/common/common.reducer';
import Label from '../../components/Label/Label';
import * as aboutAction from '../../store/actions';
import { bindActionCreators } from 'redux';
import { setAboutText } from '../../store/actions';

/* tslint:disable:variable-name */
const MainWrapper = styled.div`
  // some styles
`;
/* tslint:enable:variable-name */

interface IProps {
  text?: string;
  aboutAction?: any;
}

interface IState {

}

class About extends React.Component<IProps, IState> {
  public constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    // this.customOnClick = this.customOnClick.bind(this);
  }

  public render(): JSX.Element {
      const { text } = this.props;
      return (
        <MainWrapper>
          <Label
              text={ text }
          />
          <Button text={ 'Back' } onClick={ this.changeText } />
        </MainWrapper>
    );
  }

  public changeText(event): void {
      this.props.aboutAction('example1');
  }

}

const mapStateToProps = (state: { common: ICommonReducer; }) => {
  return {
      text: state.common.text.text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      aboutAction(text: string) {
          dispatch(setAboutText(text));
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
