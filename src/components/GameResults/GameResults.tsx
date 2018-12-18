import * as React from 'react';

import './GameResults.scss';

interface IProps {
    shown: boolean;
}

export default class GameResults extends React.Component<IProps> {
    public constructor(props: IProps) {
        super(props);
    }

    public render(): JSX.Element {
        const {shown} = this.props;

        return (
            <div className={`results-block ${shown? 'shown': 'hidden'}`}>
                <div className='results-block__score'/>
                <div className='results-block__goals'/>
                <div className='results-block__buttons'>
                    <span className='game-button again-button'>Play again</span>
                    <span className='game-button back-button'>Go back</span>
                </div>
            </div>
        );
    }
}
