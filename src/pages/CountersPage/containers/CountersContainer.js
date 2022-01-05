import { useState, useCallback, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

import { CountersPageView } from "../components/CountersPageView";
import { CounterContainer } from "../../CounterPage/containers/CounterContainer";

export const CountersContainer = () => {
	const [counters, setCounters] = useState([]);

	const addCounter = useCallback(() => {
        
		const newCounter = {
			id: uuidv4(),
			initialValue: 0,
		};

		const evenCountersValueInc = counters.map((counter) => {
			if (counter.initialValue % 2 === 0) {
				return {
					id: counter.id,
					initialValue: counter.initialValue + 1,
				};
			}
			return counter;
		});

		setCounters([newCounter, ...evenCountersValueInc]);
	}, [counters]);

	const delCounter = () => {
		const newListOfCounters = [...counters.slice(0, counters.length - 1)];

		if (counters.length > 0) {
			setCounters(newListOfCounters);
		}
	};

	const reset = useCallback(() => {
		if (counters.length > 0) {
			setCounters([]);
		}
	}, [counters]);

	// console.log(counters);

	let sum = 0;

	const renderCounters = (countersList) => {
		const elements = countersList.map(({ id, counter }) => (
			<CounterContainer key={id} initialValue={counter} />
		));

		return elements;
	};

	const countersAmount = renderCounters(counters);

	return (
		<>
			<CountersPageView
				addCounter={addCounter}
				delCounter={delCounter}
				reset={reset}
				counterNum={counters.length}
				sum={sum}
			/>
			{countersAmount}
		</>
	);
};
