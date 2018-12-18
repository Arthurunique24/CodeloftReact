import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PreSinglePlayer from '../../components/PreSinglePlayer/PreSinglePlayer';
import { ILangReducer } from '../../redux/lang/lang.reducer';

/* tslint:disable:variable-name */
const SinglePlayerWrapper = styled.div`
  // some styles
`;

/* tslint:enable:variable-name */

interface IProps {

}

class SinglePlayer extends React.Component<IProps> {
    public constructor(props) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className='singleplayer-block'>
                <PreSinglePlayer scoreTip={''} controlTip={''} goalTip={''} mainLabel={''} playText={''}/>
            </div>
        );
    }

    public componentWillMount() {
        const floorElements = document.getElementsByClassName('main-content__logo') as HTMLCollectionOf<HTMLElement>;
        floorElements[0].style.display = 'none';
    }

    public componentWillUnmount() {
        const floorElements = document.getElementsByClassName('main-content__logo') as HTMLCollectionOf<HTMLElement>;
        floorElements[0].style.display = 'block';
    }
}

const mapStateToProps = (state: { lang: ILangReducer }) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayer);
