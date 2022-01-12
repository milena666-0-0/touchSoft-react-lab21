import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import { MemorizedCountersPageView } from "../components/CountersPageView";
import { MemorizedCounterView } from "../../CounterPage/components/CounterView";

export const CountersContainer = () => {
	const [counters, setCounters] = useState([]);

	const addCounter = useCallback(() => {

		const newCounter = {
			id: uuidv4(),
			initialValue: 0,
		};

		const evenCountersValueInc = counters.map((counter) =>
			counter.initialValue % 2 === 0
				? { id: counter.id, initialValue: counter.initialValue + 1 }
				: counter
		);

		setCounters([newCounter, ...evenCountersValueInc]);
	}, [counters]);

	const handleIncrement = useCallback((id) => {

		const newListOfCounters = counters.map((counterItem) =>
			counterItem.id !== id
				? counterItem
				: { id, initialValue: counterItem.initialValue + 1 }
		);

		setCounters(newListOfCounters);
	}, [counters]);

	const handleDecrement = useCallback((id) => {

		const newListOfCounters = counters.map((counterItem) =>
			counterItem.id !== id
				? counterItem
				: { id, initialValue: counterItem.initialValue - 1 }
		);

		counters.forEach(counter => {
			if(counter.id === id && counter.initialValue > 0) {
				setCounters(newListOfCounters);
			}
		});

	}, [counters]);

	const delCounter = useCallback(() => {
		const oddCountersValueDec = counters
			.map((counter) =>
				counter.initialValue % 2 !== 0
					? { id: counter.id, initialValue: counter.initialValue - 1 }
					: counter
			)
			.splice(0, counters.length - 1);

		if (counters.length > 0) {
			setCounters(oddCountersValueDec);
		}
	}, [counters]);

	const reset = useCallback(() => {

		if (counters.length > 0) {
			setCounters([]);
		}
		
	}, [counters]);

	const sum = counters.reduce((acc, counter) => acc + counter.initialValue, 0);

	return (
		<>
			<MemorizedCountersPageView
				addCounter={addCounter}
				delCounter={delCounter}
				reset={reset}
				counterNum={counters.length}
				sum={sum}
			/>
			{counters.map(({ id, initialValue }) => (
				<MemorizedCounterView
					key={id}
					id={id}
					counter={initialValue}
					handleDecrement={handleDecrement}
					handleIncrement={handleIncrement}
				/>
			))}
		</>
	);
};
