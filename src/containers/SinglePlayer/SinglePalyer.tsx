import * as React from 'react';
import { connect } from 'react-redux';
import PreSinglePlayer from '../../components/PreSinglePlayer/PreSinglePlayer';
import { ILangReducer } from '../../redux/lang/lang.reducer';
import { parseAll } from '../../service/UrlParser/UrlParser';

import './SinglePlayer.scss';

interface IProps {
    scoreTip: string;
    controlTip: string;
    goalTip: string;
    mainLabel: string;
    playText: string;
    backText: string;
}

class SinglePlayer extends React.Component<IProps> {
    public constructor(props) {
        super(props);
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
                <PreSinglePlayer
                    scoreTip={ scoreTip }
                    controlTip={ controlTip }
                    goalTip={ goalTip }
                    mainLabel={ mainLabel }
                    playText={ playText}
                    backText={ backText }
                />
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
    }

    private onBackClick() {
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
