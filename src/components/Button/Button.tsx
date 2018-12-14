import * as React from 'react';

import './Button.scss';

interface IProps {
  text: string;
  onClick?: (event) => void;
}

export default class Button extends React.Component<IProps> {
  public constructor(props: IProps) {
    super(props);
    this.onCLick = this.onCLick.bind(this);
  }
  
  public render(): JSX.Element {
    const {text} = this.props;

    return (
      <div onClick={ this.onCLick } className={ 'button' }>
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
