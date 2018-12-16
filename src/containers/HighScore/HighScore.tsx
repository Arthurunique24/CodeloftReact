import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { IUserScore, ScoreTable } from '../../components/ScoreTable/ScoreTable';
import Label from '../../components/Label/Label';
import { ILangReducer } from '../../redux/lang/lang.reducer';
import { ChangeEvent } from 'react';
import Transport from '../../service/Transport/Transport';

/* tslint:disable:variable-name */
const HighScoreWrapper = styled.div`
  // some styles
`;

/* tslint:enable:variable-name */

interface IProps {
    backText?: string;
}

interface IState {
    numOfPages?: number;
    currentActive?: number;
}

class HighScore extends React.Component<IProps, IState> {
    public constructor(props) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <HighScoreWrapper>
                <ScoreTable/>
            </HighScoreWrapper>
        );
    }

    public componentWillMount() {
        Transport.Get('/user').then((responseJSON) => responseJSON.json())
            .then((response) => {
                this.setState({numOfPages: response.pagesCount});
            });
    }

    private pageBack() {

    }

    private pageForward() {

    }

    private getPage(num: number) {

    }
}
