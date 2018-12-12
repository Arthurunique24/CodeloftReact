import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ICommonReducer } from '../../redux/common/common.reducer';
import { setInputData } from '../../redux/common/common.action';

import './Input.scss';

/* tslint:disable:variable-name */
const InputWrapper = styled.div`
  
`;
/* tslint:enable:variable-name */

interface IProps {
  text?: string;
  placeholder?: string;
  setInputData?: (value: string) => void;
}

interface IState {

}

class Input extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
  }
  
  public render(): JSX.Element {
    const {text} = this.props;
    const {placeholder} = this.props;
    
    return (
      <InputWrapper>
        <input className={ 'input' } value={ text } placeholder={ placeholder } onChange={ this.onChange } />
      </InputWrapper>
    );
  }
  
  private onChange(event) {
    this.props.setInputData(event.target.value);
  }
}

const mapStateToProps = (state: { common: ICommonReducer; }) => {
  return {
    text: state.common.inputData.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInputData(value: string) {
      dispatch(setInputData(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
