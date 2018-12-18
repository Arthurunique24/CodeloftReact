import * as React from 'react';
import { connect } from 'react-redux';
import PreSinglePlayer from '../../components/PreSinglePlayer/PreSinglePlayer';
import GameBlock from '../../components/GameBlock/GameBlock';
import { ILangReducer } from '../../redux/lang/lang.reducer';

import './SinglePlayer.scss';

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
    public constructor(props) {
        super(props);
        this.state = {
            preSingleMode: true,
            gameMode: false,
            resultsMode: false,
        };
        this.onPlayClick = this.onPlayClick.bind(this);
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
                {this.state.gameMode ?
                    <GameBlock className={SINGLE_PLAYER_GAME_FIELD}/>: ''
                }
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
        document.body.style.cursor = 'default';
    }

    private onPlayClick() {
        document.body.style.cursor = 'none';
        this.setState({
           preSingleMode: false,
           gameMode: true,
        });
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
