import * as React from 'react';
import b from '../../middleware/b';
import styled from 'styled-components';
import Label from '../Label/Label';
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
    score: ''
  };

  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { user } = this.props;
    const { email } = this.props;
    const { score } = this.props;
    const { className } = this.props;

    return (
        <div className={ className }>
          <Label className={ 'user-info-label' } text={ user === '' ? '' : 'User: ' + user}/>
          <Label className={ 'user-info-label' } text={ email === '' ? '' : 'Email: ' + email}/>
          <Label className={ 'user-info-label' } text={ score === '' ? '' : 'Score: ' + score}/>
        </div>
    );
  }
}
