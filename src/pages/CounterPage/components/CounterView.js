import "../counter.scss";

import {Link} from 'react-router-dom';

export const CounterView = ({ counter, handleInc, handleDec }) => {
	const evenNum = counter % 2 === 0 && counter !== 0;

	return (
		<div className="container">
			<div className="linkers">
				<Link to={"/"}>Home</Link>
				<Link to={"/counter"}>Counter</Link>
			</div>
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
					{evenNum ? "Введено четное число" : "..."}
				</span>
				<div className="counter__btns">
					<button onClick={() => handleInc()} className="btn">
						+
					</button>
					<button onClick={() => handleDec()} className="btn">
						-
					</button>
				</div>
			</div>
		</div>
	);
};
