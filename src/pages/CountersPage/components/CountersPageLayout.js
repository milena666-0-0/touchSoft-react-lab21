import { CounterView } from "../../CounterPage/components/CounterView";

import "../countersPage.scss";

export const CountersPageLayout = ({
	handleCreateCounter,
	handleDeleteCounter,
	reset,
	sum,
	counters,
	handleDecrement, 
	handleIncrement
}) => {
	return (
		<div className="container">
			<div className="main-counter counter">
				<div className="main-counter__btns counter__btns">
					<button onClick={handleCreateCounter} className="btn">
						Add Counter
					</button>
					<button onClick={handleDeleteCounter} className="btn">
						Remove Counter
					</button>
					<button onClick={reset} className="btn">
						Reset
					</button>
				</div>
				<span className="main-counter__span counter__span">
					{counters.length}
				</span>
				<span className="main-counter__span counter__span">{sum}</span>
			</div>
			{counters.map(({ id, initialValue }) => (
				<CounterView
					key={id}
					id={id}
					counter={initialValue}
					handleDecrement={handleDecrement}
					handleIncrement={handleIncrement}
				/>
			))}
		</div>
	);
};
