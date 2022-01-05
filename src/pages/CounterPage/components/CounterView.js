import "../counter.scss";

export const CounterView = ({counter, handleInc, handleDec }) => {
	const evenNum = counter === 0 || counter % 2 === 0 ;

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
