import { handleActions } from "redux-actions";
import { v4 as uuidv4 } from "uuid";

import { isEven } from "../../../utils/isEven";
import * as actions from "../actions/index";

const defaultState = {
	counters: [],
};

export const counterManagerReducer = handleActions(
	{
		[actions.CREATE_COUNTER]: (state) => {
			const newCounter = {
				id: uuidv4(),
				initialValue: 0,
			};

			const updatedCountersList = state.counters.map(
				({ initialValue, ...rest }) => ({
					...rest,
					initialValue: isEven(initialValue)
						? initialValue + 1
						: initialValue,
				})
			);

			const counters = [newCounter, ...updatedCountersList];
			return {
				...state,
				counters,
			};
		},
		[actions.DELETE_COUNTER]: (state) => {
			const updatedCountersList = state.counters.map(
				({ initialValue, ...rest }) => ({
					...rest,
					initialValue:
						isEven(initialValue) && initialValue > 0
							? initialValue - 1
							: initialValue,
				})
			);

			const counters = updatedCountersList.splice(
				0,
				updatedCountersList.length - 1
			);
			return {
				...state,
				counters,
			};
		},
		[actions.INCREMENT_COUNTER]: (state, { payload: id }) => {
			const counters = [...state.counters];

			const updatedCounter = counters.find((counter) => counter.id === id);

			updatedCounter.initialValue += 1;

			return {
				...state,
				counters,
			};
		},
		[actions.DECREMENT_COUNTER]: (state, { payload: id }) => {
			const counters = [...state.counters];

			const updatedCounter = counters.find((counter) => counter.id === id);

			if (updatedCounter.initialValue > 0) {
				updatedCounter.initialValue -= 1;
			};

			return {
				...state,
				counters,
			};
		},
        [actions.RESET_COUNTERS]: (state) => {
		
			return {
				...state,
				counters: [],
			};
		},
	},
	defaultState
);
