import * as React from 'react';
import b from '../../middleware/b';

import './HeaderRight.scss';
import Img from '../Img/Img';

interface IProps {
  auth?: boolean;
  className?: string;
  onClick?: (event) => void;
}

interface IState {
}

export default class HeaderRight extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    auth: false,
    className: '',
  };

  public constructor(props: IProps) {
    super(props);
    this.onCLick = this.onCLick.bind(this);
  }

  public render(): JSX.Element {
    // const { text } = this.props;
    const { className } = this.props;
    const { auth } = this.props;

    return (
        <div className="header-right">
          {auth ?
              (<a className={ 'header-right__links' } href="#">UserName</a>)
              :
              (<div><a className={ 'header-right__links' }>Sign In</a> <a className={ 'header-right__links' }>Sign Up</a></div>)
          }
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
