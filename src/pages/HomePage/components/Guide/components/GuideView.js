import { GuideItemsContainer } from "../container/GuideItemsContainer";
import {Button} from '../../../../../components/Button/Button';

import "../guide.scss";

export const GuideView = () => {
	return (
		<section className="guide">
			<div className="container">
				<div className="guide__title">How it works</div>
				<GuideItemsContainer />
				<Button width={166} height={48} label={'Learn More'}/>
			</div>
		</section>
	);
};
