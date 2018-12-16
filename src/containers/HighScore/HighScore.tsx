import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './HighScore.scss';

import Button from '../../components/Button/Button';
import { IUserScore, ScoreTable } from '../../components/ScoreTable/ScoreTable';
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
    pagesArray?: number[];
    minPage?: number;
    users?: IUserScore[];
}

class HighScore extends React.Component<IProps, IState> {
    public constructor(props) {
        super(props);
        this.state = {
            currentActive: 1,
            minPage: 1,
            users: [],
            pagesArray: [],
        };
        this.pageForward = this.pageForward.bind(this);
        this.pageBack = this.pageBack.bind(this);
    }

    public render(): JSX.Element {
        const paginateBack = '<<';
        const paginateForward = '>>';
        const {backText} = this.props;

        return (
            <HighScoreWrapper>
                <ScoreTable users={this.state.users}/>
                <div className={'leaders-block__pagination-block'}>
                    <a onClick={this.pageBack}>{paginateBack}</a>
                    {this.state.pagesArray.map((i) => <a key={i} className={this.state.currentActive === i? 'active': ''}>{i}</a>)}
                    <a onClick={this.pageForward}>{paginateForward}</a>
                </div>
                <Button text={backText}/>
            </HighScoreWrapper>
        );
    }

    public componentWillMount() {
        return Transport.Get('/user').then((responseJSON) => responseJSON.json())
            .then((response) => {
                this.setState({numOfPages: response.pagesCount});
                this.paginate();
            });
    }

    private pageBack() {
        if (this.state.currentActive > 1) {
            this.setState({currentActive: this.state.currentActive - 1});
            this.paginate();
        }
    }

    private pageForward() {
        if (this.state.currentActive < this.state.numOfPages) {
            this.setState({currentActive: this.state.currentActive + 1});
            this.paginate();
        }
    }

    private paginate() {
        if (this.state.currentActive - this.state.minPage > 2) {
            this.setState({minPage: this.state.minPage + this.state.currentActive - this.state.minPage - 2});
        }
        if (this.state.currentActive - this.state.minPage < 2 && this.state.minPage > 1) {
            this.setState({minPage: this.state.minPage - (2 - (this.state.currentActive - this.state.minPage))});
        }
        const tempPointers: number[] = [];
        for (let i = Math.max(1, this.state.minPage); i <= Math.min(this.state.minPage + 4, this.state.numOfPages); i++) {
            tempPointers.push(i);
        }
        this.setState({pagesArray: tempPointers});
        const tempArray: IUserScore[] = [];
        Transport.Get(`/user?page=${this.state.currentActive}&page_size=5`)
            .then((responseJSON) => responseJSON.json())
            .then((response) => {
                response.users.forEach((user) => {
                    const tempUser: IUserScore = {
                        nick: user.login,
                        score: user.score,
                    };
                    tempArray.push(tempUser);
                });
                this.setState({users: tempArray});
            });
    }
}

const mapStateToProps = (state: { lang: ILangReducer }) => {
    return {
        backText: state.lang.langObject['buttonBack'][state.lang.lang],
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HighScore);
