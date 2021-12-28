import {AdvicesCardsContainer} from '../containers/AdvicesCardsContainer';
import {Button} from '../../../../../components/Button/Button';

import '../advices.scss';

export const AdvicesView = () => {
    return(
        <section className="advices">
			<div className="container">
				<div className="advices__title">In the Wild</div>
				<div className="advices__desc">
					In The Wild is a collection of pieces to help close the
					communication gap, while growing the love (and understanding)
					between you and your best pal.
				</div>
				<AdvicesCardsContainer />
				<div className="advices__more">
					<Button width={160} height={48} label={'View more'}/>
				</div>
			</div>
		</section>
    )
};