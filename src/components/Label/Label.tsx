import * as React from 'react';
import b from '../../middleware/b';
import styled from 'styled-components';
import './Label.scss';

interface IProps {
  text?: string;
  className?: string;
}

interface IState {
}

export default class Label extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    text: 'Error',
  };

  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { text } = this.props;
    const { className } = this.props;

    return (
        <p className={ className }>{ text }</p>
    );
  }
}
