import { PetPharmacy } from "../components/PetPharmacy/PetPharmacy";
import {FeaturesContainer} from '../components/Features/containers/FeaturesContainer';
import {GuideContainer} from '../components/Guide/container/GuideContainer';
import {ForVeterinarians} from '../components/ForVeterinarians/ForVeterinarians';
import {ReviewsContainer} from '../components/Reviews/container/ReviewsContainer';
import {AdvicesContainer} from '../components/Advices/containers/AdvicesContainer';
import {CompaniesContainer} from '../components/Companies/containers/CompaniesContainer';

export const HomePageContainer = () => {
	return (
		<>
			<PetPharmacy />
            <FeaturesContainer/>
			<GuideContainer/>
			<ForVeterinarians/>
			<ReviewsContainer/>
			<AdvicesContainer/>
			<CompaniesContainer/>
		</>
	);
};
