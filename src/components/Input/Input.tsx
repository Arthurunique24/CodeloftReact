import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ICommonReducer } from '../../redux/common/common.reducer';
import { setInputData } from '../../redux/common/common.action';

import './Input.scss';

interface IProps {
    text?: string;
    placeholder?: string;
    type?: string;
    setInputData?: (value: string) => void;
    onChange?: (event: object) => void;
}

interface IState {

}

class Input extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
    }

    public render(): JSX.Element {
        const {text} = this.props;
        const {placeholder} = this.props;
        const {type} = this.props;
        const {onChange} = this.props;

        return (
            <input className={'input'} type={type} value={text} placeholder={placeholder} onChange={onChange}/>
        );
    }
}

const mapStateToProps = (state: { common: ICommonReducer; }) => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
