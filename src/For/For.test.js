import React from 'react';
import { render, screen } from '@testing-library/react';
import For from './For';
import message from './ForLogsMessages';

describe('For test block', () => {
	test('for component renders all components', () => {
		render(
			<For
				from={1}
				to={3}
				element={(props) => <p>{props.index}</p>}
			/>
		);
		const elem1 = screen.getByText('1');
		const elem2 = screen.getByText('2');
		const elem3 = screen.getByText('3');
		expect(elem1).toBeInTheDocument();
		expect(elem2).toBeInTheDocument();
		expect(elem3).toBeInTheDocument();
	});

	test('for component renders all components when element defined on children', () => {
		render(
			<For from={1} to={3}>
				{(props) => <p>{props.index}</p>}
			</For>
		);
		const elem1 = screen.getByText('1');
		const elem2 = screen.getByText('2');
		const elem3 = screen.getByText('3');
		expect(elem1).toBeInTheDocument();
		expect(elem2).toBeInTheDocument();
		expect(elem3).toBeInTheDocument();
	});

	test('for component multiindex renders all components', () => {
		render(
			<For from={1} to={2}>
				<For
					from={0}
					to={1}
					element={({ index }) => <p>{String(index[0]) + String(index[1])}</p>}
					nestedFor
				/>
			</For>
		);
		const elem10 = screen.getByText('10');
		const elem11 = screen.getByText('11');
		const elem20 = screen.getByText('20');
		const elem21 = screen.getByText('21');
		expect(elem10).toBeInTheDocument();
		expect(elem11).toBeInTheDocument();
		expect(elem20).toBeInTheDocument();
		expect(elem21).toBeInTheDocument();
	});

	test('for component multiindex without nestedFor throws error', () => {
		console.error = jest.fn();
		render(
			<For from={1} to={2}>
				<For
					from={0}
					to={1}
					element={({ index }) => <p>{String(index[0]) + String(index[1])}</p>}
				/>
			</For>
		);
		expect(console.error).toHaveBeenCalledWith(message.noInvalidPrerender);
	});
});
