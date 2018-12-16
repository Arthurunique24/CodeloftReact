import * as React from 'react';
import './UserInfo.scss';

interface IProps {
    user?: string;
    email?: string;
    score?: string;
    className?: string;
}

interface IState {
}

export default class UserInfo extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        user: '',
        email: '',
        score: '',
    };

    public constructor(props: IProps) {
        super(props);
    }

    public render(): JSX.Element {
        const { user } = this.props;
        const { email } = this.props;
        const { score } = this.props;

        return (
            <div className='profile-block__user-info'>
                <p className='user-info-label'>User: {user}</p>
                <p className='user-info-label'>Email: {email}</p>
                <p className='user-info-label'>Score: {score}</p>
            </div>
        );
    }
}