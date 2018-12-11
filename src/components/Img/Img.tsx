import * as React from 'react';
import b from '../../middleware/b';
import styled from 'styled-components';

interface IProps {
  imgSrc: any;
  className?: string;
}

interface IState {
}

export default class Label extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
  };

  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { imgSrc } = this.props;
    const { className } = this.props;

    return (
        <img className={ className } src={ imgSrc }/>
    );
  }
}
