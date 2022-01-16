import {memo} from 'react';

import {isEven} from '../../../utils/isEven';

import "../counter.scss";

export const CounterView = memo(({handleIncrement, handleDecrement, id, counter}) => {

 	const evenNum = isEven(counter);

	return (
		<div className="container">
			<div
				style={{
					backgroundColor: evenNum
						? "rgb(243, 127, 127)"
						: "rgb(209, 206, 206)",
				}}
				className="counter"
			>
				<span className="counter__span counter__span-screen">
					{counter}
				</span>
				<span className="counter__span counter__span-even">
					{evenNum ? "Введено четное число" : "Введено нечетное число"}
				</span>
				<div className="counter__btns">
					<button onClick={() => handleIncrement(id)} className="btn">
						+
					</button>
					<button onClick={() => handleDecrement(id)} className="btn">
						-
					</button>
				</div>
			</div>
		</div>
	);
});
