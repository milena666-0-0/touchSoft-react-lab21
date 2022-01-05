import {HeaderContainer} from '../../../components/Header/containers/HeaderContainer';
import {FooterContainer} from '../../../components/Footer/container/FooterContainer';
import { CounterContainer } from "../containers/CounterContainer";

export const CounterPageContainer = () => {
	return (
		<>
			<HeaderContainer />
			<CounterContainer />
			<FooterContainer/>
		</>
	);
};
