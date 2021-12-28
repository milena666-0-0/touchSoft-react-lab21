import { HeaderContainer } from "../../../components/Header/containers/HeaderContainer";
import { PetPharmacy } from "../components/PetPharmacy/PetPharmacy";
import {FeaturesContainer} from '../components/Features/containers/FeaturesContainer';
import {GuideContainer} from '../components/Guide/container/GuideContainer';
import {ForVeterinarians} from '../components/ForVeterinarians/ForVeterinarians';
import {ReviewsContainer} from '../components/Reviews/container/ReviewsContainer';
import {AdvicesContainer} from '../components/Advices/containers/AdvicesContainer';
import {Companies} from '../components/Companies/Companies';
import {FooterContainer} from '../../../components/Footer/container/FooterContainer';

export const HomePageContainer = () => {
	return (
		<>
			<HeaderContainer />
			<PetPharmacy />
            <FeaturesContainer/>
			<GuideContainer/>
			<ForVeterinarians/>
			<ReviewsContainer/>
			<AdvicesContainer/>
			<Companies/>
			<FooterContainer/>
		</>
	);
};
