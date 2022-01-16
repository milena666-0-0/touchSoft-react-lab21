import { createSelector } from "reselect";

const countersSelector = (state) => state.countersManagerPage.counters;

export const total = createSelector(countersSelector, (counters) => {
	return counters.reduce(
		(result, counter) => result + counter.initialValue,
		0
	);
});
