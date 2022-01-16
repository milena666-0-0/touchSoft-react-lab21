import { useCallback } from "react";
import {useDispatch, useSelector} from 'react-redux';

import { CountersPageLayout } from "../components/CountersPageLayout";
import {
	CREATE_COUNTER,
	DELETE_COUNTER,
	INCREMENT_COUNTER,
	DECREMENT_COUNTER,
	RESET_COUNTERS,
} from "../actions/index";
import {total} from '../selectors/index';

export const CountersContainer = () => {

	const dispatch = useDispatch();

	const {counters} = useSelector(state => state.countersManagerPage);
	const sum = useSelector(total);

	const handleCreateCounter = useCallback(() => {
		dispatch(CREATE_COUNTER());
	}, []);

	const handleIncrement = useCallback((id) => {
		dispatch(INCREMENT_COUNTER(id));
	}, []);

	const handleDecrement = useCallback((id) => {
		dispatch(DECREMENT_COUNTER(id));
	}, []);

	const handleDeleteCounter = () => {
		if (counters.length > 0) {
			dispatch(DELETE_COUNTER());
		}
	};

	const reset = () => {
		if (counters.length > 0) {
			dispatch(RESET_COUNTERS());
		}
	};

	return (
		<>
			<CountersPageLayout
				handleCreateCounter={handleCreateCounter}
				handleDeleteCounter={handleDeleteCounter}
				reset={reset}
				sum={sum}
				counters={counters}
				handleDecrement={handleDecrement}
				handleIncrement={handleIncrement}
			/>
		</>
	);
};
