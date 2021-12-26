import { HeaderView } from "../../../components/Header/HeaderView";
import { PetPharmacy } from "../components/PetPharmacy/PetPharmacy";
import {Features} from '../components/Features/Features';
import {GuideContainer} from '../components/Guide/container/GuideContainer';
import {ForVeterinarians} from '../components/ForVeterinarians/ForVeterinarians';
import {ReviewsContainer} from '../components/Reviews/container/ReviewsContainer';
import {AdvicesContainer} from '../components/Advices/container/AdvicesContainer';
import {Companies} from '../components/Companies/Companies';
import {FooterContainer} from '../../../components/Footer/container/FooterContainer';

export const HomePageContainer = () => {
	return (
		<>
			<HeaderView />
			<PetPharmacy />
            <Features/>
			<GuideContainer/>
			<ForVeterinarians/>
			<ReviewsContainer/>
			<AdvicesContainer/>
			<Companies/>
			<FooterContainer/>
		</>
	);
};
