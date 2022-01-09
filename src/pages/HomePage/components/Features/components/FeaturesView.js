import { FeaturesLayoutContainer } from '../containers/FeaturesLayoutContainer';

import '../features.scss';

import dog from '../../../../../static/imgs/features/dog.png';

export const FeaturesView = () => {
    return(
        <section className="features">
			<div className="container">
				<div className="features__row">
					<div className="features__info">
						<div className="features__info-title">
							We couldn’t find a pharmacy experience worthy of our best
							buds— so we created one.
						</div>
						<div>
                            <img src={dog} alt="dog"/>
                        </div>
					</div>
					<FeaturesLayoutContainer/>
				</div>
			</div>
		</section>
    );
};