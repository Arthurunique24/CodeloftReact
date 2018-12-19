import * as React from 'react';
import b from '../../middleware/b';

import LanguageDrop from '../LanguageDrop/LanguageDrop';
import './Footer.scss';

interface IProps {
    className?: string;
    onClick?: (event) => void;
}

interface IState {
}

export default class Footer extends React.Component<IProps, IState> {
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
            <div className={ 'footer' }>
                <p className={ 'footer__logo' }>CodeLoft</p>
                <LanguageDrop/>
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
