import * as React from 'react';
import b from '../../middleware/b';

import './LanguageDrop.scss';

interface IProps {
    className?: string;
    onClick?: (event) => void;
}

interface IState {
}

export default class LanguageDrop extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        className: '',
    };

    public constructor(props: IProps) {
        super(props);
        this.onCLick = this.onCLick.bind(this);
    }

    public render(): JSX.Element {
        const { className } = this.props;

        return (
            <div className='dropdown'>
                <button className='dropbtn'>Ru</button>
                <div className='dropdown-content'>
                    <a>Ru</a>
                    <a>Eng</a>
                </div>
            </div>
        );
    }

    private onCLick(event) {
        const {onClick} = this.props;

        if (onClick) {
            onClick(event);
        }
    }
}
