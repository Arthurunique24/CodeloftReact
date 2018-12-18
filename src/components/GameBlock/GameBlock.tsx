import * as React from 'react';

import './GameBlock.scss';

interface IProps {
    className?: string;
}

export default class GameBlock extends React.Component<IProps> {
    public constructor(props: IProps) {
        super(props);
    }

    public render(): JSX.Element {
        const {className} = this.props;

        return (
            <canvas className={`game-field ${className}`}/>
        );
    }
}
