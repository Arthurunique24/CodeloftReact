import * as React from 'react';

import './Button.scss';

interface IProps {
    shown: boolean;
}

export default class GameResults extends React.Component<IProps> {
    public constructor(props: IProps) {
        super(props);
    }

    public render(): JSX.Element {

        return (
            <div className='results-block'>
                <div className='results-block__score'>Score: 942</div>
                <div className='results-block__goals'>Goals passed: 112</div>
                <div className='results-block__buttons'>
                    <span className='game-button again-button'>Play again</span>
                    <span className='game-button back-button'>Go back</span>
                </div>
            </div>
        );
    }
}
