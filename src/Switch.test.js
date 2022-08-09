import React from 'react';
import { render, screen } from '@testing-library/react';
import { Case, Default, Switch } from './Switch';

describe('Switch test block', () => {
	test('switch component renders only correspondent component on that component case', () => {
		render(
			<Switch value={2}>
				<Case value={1}>1</Case>
				<Case value={2}>2</Case>
				<Case value={3}>3</Case>
				<Default>0</Default>
			</Switch>
		);
		const elem1 = screen.queryByText('1');
		const elem2 = screen.getByText('2');
		const elem3 = screen.queryByText('3');
		const elemD = screen.queryByText('0');
		expect(elem1).toBeNull();
		expect(elem2).toBeInTheDocument();
		expect(elem3).toBeNull();
		expect(elemD).toBeNull();
	});

	test('switch component renders only default correspondent component on no case match', () => {
		render(
			<Switch value={4}>
				<Case value={1}>1</Case>
				<Case value={2}>2</Case>
				<Case value={3}>3</Case>
				<Default>0</Default>
			</Switch>
		);
		const elem1 = screen.queryByText('1');
		const elem2 = screen.queryByText('2');
		const elem3 = screen.queryByText('3');
		const elemD = screen.getByText('0');
		expect(elem1).toBeNull();
		expect(elem2).toBeNull();
		expect(elem3).toBeNull();
		expect(elemD).toBeInTheDocument();
	});
});
