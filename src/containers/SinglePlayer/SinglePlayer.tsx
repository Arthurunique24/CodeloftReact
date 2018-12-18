import * as React from 'react';
import { connect } from 'react-redux';
import PreSinglePlayer from '../../components/PreSinglePlayer/PreSinglePlayer';
import GameInfo from '../../components/GameInfo/GameInfo';
import SinglePlayerHandler from '../../game/SinglePlayer/SinglePlayerHandler';
import GameBlock from '../../components/GameBlock/GameBlock';
import { ILangReducer } from '../../redux/lang/lang.reducer';
import langService from '../../service/LangService/LangService';

import './SinglePlayer.scss';
import eventBus from '../../modules/EventBus';

const SINGLE_PLAYER_GAME_FIELD = 'singleplayer-block__game-field';

interface IProps {
    scoreTip: string;
    controlTip: string;
    goalTip: string;
    mainLabel: string;
    playText: string;
    backText: string;
}

interface IState {
    preSingleMode: boolean;
    gameMode: boolean;
    resultsMode: boolean;
}

class SinglePlayer extends React.Component<IProps, IState> {
    private gameHandler: SinglePlayerHandler;
    private timerLabel: HTMLCollectionOf<HTMLElement>;
    private scoreLabel: HTMLCollectionOf<HTMLElement>;
    private goalsLabel: HTMLCollectionOf<HTMLElement>;
    private readonly timerHandler: () => void;
    private readonly resultsHandler: () => void;
    private readonly scoreHandler: (value) => void;

    public constructor(props) {
        super(props);
        this.state = {
            preSingleMode: true,
            gameMode: false,
            resultsMode: false,
        };
        this.onPlayClick = this.onPlayClick.bind(this);
        this.scoreHandler = this.redrawScore.bind(this);
        this.timerHandler = this.redrawTimer.bind(this);
        this.resultsHandler = this.showResults.bind(this);
    }

    public render(): JSX.Element {
        const {scoreTip} = this.props;
        const {controlTip} = this.props;
        const {goalTip} = this.props;
        const {mainLabel} = this.props;
        const {playText} = this.props;
        const {backText} = this.props;

        return (
            <div className='singleplayer-block'>
                {this.state.preSingleMode ?
                    <PreSinglePlayer
                        scoreTip={scoreTip}
                        controlTip={controlTip}
                        goalTip={goalTip}
                        mainLabel={mainLabel}
                        playText={playText}
                        backText={backText}
                        playClick={this.onPlayClick}
                    />: ''
                }
                <GameBlock shown={this.state.gameMode} className={SINGLE_PLAYER_GAME_FIELD}/>: ''
                <GameInfo shown={this.state.gameMode}/>: ''
                {this.state.resultsMode ?
                    '': ''
                }
            </div>
        );
    }

    public componentWillMount() {
        const floorElements = document.getElementsByClassName('main-content__logo') as HTMLCollectionOf<HTMLElement>;
        floorElements[0].style.display = 'none';
    }

    public componentWillUnmount() {
        const floorElements = document.getElementsByClassName('main-content__logo') as HTMLCollectionOf<HTMLElement>;
        floorElements[0].style.display = 'block';
        this.endGame();
    }

    private onPlayClick() {
        document.body.style.cursor = 'none';
        this.setState({
           preSingleMode: false,
           gameMode: true,
        });
        this.gameHandler = new SinglePlayerHandler([], SINGLE_PLAYER_GAME_FIELD);
        this.gameHandler.startGame();
    }

    private redrawTimer(value) {
        if (!this.timerLabel) {
            this.timerLabel = document.getElementsByClassName('game-stat__timer-block') as HTMLCollectionOf<HTMLElement>;
        }
        if (value < 10) {
            this.timerLabel[0].style.color = 'red';
            this.timerLabel[0].style.animation = '1s Always ease alternate infinite';
        } else {
            this.timerLabel[0].style.color = 'white';
            this.timerLabel[0].style.animation = '';
        }
        this.timerLabel[0].innerText = `${langService.getWord('game.time')} ${value}`;
    }

    private redrawScore(value) {
        if (!this.scoreLabel) {
            this.scoreLabel = document.getElementsByClassName('game-stat__timer-block') as HTMLCollectionOf<HTMLElement>;
        }
        this.scoreLabel[0].innerText = `${langService.getWord('gameResults.score')} ${value}`;
    }

    private endGame() {
        document.body.style.cursor = 'default';
        // this.scoreLabel[0].innerHTML = `${langService.getWord('gameResults.score')} ${this.gameHandler.getScore()}`;
        // this.resultBlock.goalsLabel.innerHTML = `${langService.getWord('gameResults.goals')} ${this.gameHandler.getGoalsPassed()}`;
        eventBus.off('timerStop', this.resultsHandler);
        eventBus.off('timerTick', this.timerHandler);
        eventBus.off('scoreRedraw', this.scoreHandler);
        this.gameHandler.stopGame();
    }

    private showResults() {
        // this.gameBlock.hide();
        // this._resultBlock.show();
        // this.endGame();
    }
}

const mapStateToProps = (state: { lang: ILangReducer }) => {
    return {
        scoreTip: state.lang.langObject['preSingle.scoreTip'][state.lang.lang],
        controlTip: state.lang.langObject['preSingle.controlTip'][state.lang.lang],
        goalTip: state.lang.langObject['preSingle.goalTip'][state.lang.lang],
        playText: state.lang.langObject['preSingle.play'][state.lang.lang],
        mainLabel: state.lang.langObject['preSingle.label'][state.lang.lang],
        backText: state.lang.langObject['buttonBack'][state.lang.lang],
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayer);
