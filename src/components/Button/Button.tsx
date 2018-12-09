import * as React from 'react';

import b from '../../middleware/b';

import './Button.scss';

interface IProps {
  text: string;
  onClick?: (event) => void;
}

interface IState {
}

export default class Button extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    text: 'Я есть кнопка',
  };
  
  public constructor(props: IProps) {
    super(props);
    
    this.onCLick = this.onCLick.bind(this);
  }
  
  public render(): JSX.Element {
    const {text} = this.props;
    
    return (
      <div onClick={ this.onCLick } className={ b('button', 'attr', {border: true, black: true}) }>
        <span>{ text }</span>
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
