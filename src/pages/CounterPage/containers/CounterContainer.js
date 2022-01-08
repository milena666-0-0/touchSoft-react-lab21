import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { MemorizedCounterView } from "../components/CounterView";

export const CounterContainer = ({ id = uuidv4() }) => {

	const [counter, setCounter] = useState(0);

	const handleIncrement = () => {
		setCounter((count) => count + 1);
	};

	const handleDecrement = () => {
		if (counter > 0) {
			setCounter((count) => count - 1);
		}
	};

	return (
		<MemorizedCounterView
			counter={counter}
			handleIncrement={handleIncrement}
			handleDecrement={handleDecrement}
			id={id}
		/>
	);
};
