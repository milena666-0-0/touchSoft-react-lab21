import {HeaderContainer} from '../../../components/Header/containers/HeaderContainer';
import {FooterContainer} from '../../../components/Footer/container/FooterContainer';
import {CountersContainer} from './CountersContainer';

export const CountersPageContainer = () => {
    return (
        <> 
         <HeaderContainer/>
         <CountersContainer/>
         <FooterContainer/>
        </>
    )
};