import * as React from 'react';

import './PreSinglePlayer.scss';

interface IProps {
    scoreTip: string;
    controlTip: string;
    goalTip: string;
    mainLabel: string;
    playText: string;
}

export default class PreSinglePlayer extends React.Component<IProps> {
    public constructor(props: IProps) {
        super(props);
    }

    public render(): JSX.Element {
        const {mainLabel} = this.props;
        const {scoreTip} = this.props;
        const {controlTip} = this.props;
        const {goalTip} = this.props;
        const {playText} = this.props;

        return (
            <div className='singleplayer-block__before-game-block'>
                <div className='before-game-block__logo-label'>{mainLabel}</div>
                <div className='before-game-block__score-tip'>
                    <img src='../../statics/imgs/score.png' className='images-block__image'/>
                        <div className='images-block__rules-text'>
                            {scoreTip}
                        </div>
                </div>
                <div className='before-game-block__control-tip'>
                    <img src='../../statics/imgs/control.jpg' className='images-block__image'/>
                        <div className='images-block__rules-text'>
                            {controlTip}
                        </div>
                </div>
                <div className='before-game-block__goal-tip'>
                    <img src='../../statics/imgs/goal.png' className='images-block__image'/>
                        <div className='images-block__rules-text'>
                            {goalTip}
                        </div>
                </div>
                <div className='before-game-block__buttons-block'>
                    <span className='play-button game-button'>{playText}</span>
                </div>
            </div>
        );
    }
}
