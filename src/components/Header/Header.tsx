import * as React from 'react';
import b from '../../middleware/b';

import './Header.scss';
import HeaderRight from '../HeaderRight/HeaderRight';

interface IProps {
  // text?: string;
  auth?: boolean;
  logo?: string;
  className?: string;
  onClick?: (event) => void;
}

interface IState {
}

export default class Header extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    // text: 'Я есть кнопка',
    logo: 'Logo',
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
    const { logo } = this.props;
    const { auth } = this.props;

    return (
        <div className="header">
          <a href="#" className="header__logo">{ logo }</a>
          {/*<div className="header-right">*/}
            {/*<a className="active" href="#">Войти</a>*/}
            {/*<a href="#">Регистрация</a>*/}
          {/*</div>*/}
          <HeaderRight/>
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
