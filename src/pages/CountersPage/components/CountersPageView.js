import { memo } from "react";

import "../countersPage.scss";

const CountersPageView = ({
	addCounter,
	delCounter,
	reset,
	counterNum,
	sum,
}) => {
	return (
		<div className="container">
			<div className="main-counter counter">
				<div className="main-counter__btns counter__btns">
					<button onClick={addCounter} className="btn">
						Add Counter
					</button>
					<button onClick={delCounter} className="btn">
						Remove Counter
					</button>
					<button onClick={reset} className="btn">
						Reset
					</button>
				</div>
				<span className="main-counter__span counter__span">
					{counterNum}
				</span>
				<span className="main-counter__span counter__span">{sum}</span>
			</div>
		</div>
	);
};

export const MemorizedCountersPageView = memo(CountersPageView);
