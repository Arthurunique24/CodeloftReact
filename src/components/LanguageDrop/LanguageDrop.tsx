import * as React from 'react';

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
            <div className='dropUp'>
                <a className='dropUp__button'>Ru</a>
                <div className='dropUp__content'>
                    <a className={ 'dropUp__content__links' }>Ru</a>
                    <a className={ 'dropUp__content__links' }>Eng</a>
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
