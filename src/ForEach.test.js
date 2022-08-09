import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ForEach from './ForEach';

describe('ForEach test block', () => {
	test('foreach component renders all components', () => {
		const array = ['1', '2', '3'];
		render(
			<ForEach
				array={array}
				element={(props) => <p key={props.index}>{props.value}</p>}
			/>
		);
		const elem1 = screen.getByText('1');
		const elem2 = screen.getByText('2');
		const elem3 = screen.getByText('3');
		expect(elem1).toBeInTheDocument();
		expect(elem2).toBeInTheDocument();
		expect(elem3).toBeInTheDocument();
	});

	test('foreach component renders all components when element defined on children', () => {
		const array = ['1', '2', '3'];
		render(
			<ForEach array={array}>
				{(props) => <p>{props.value}</p>}
			</ForEach>
		);
		const elem1 = screen.getByText('1');
		const elem2 = screen.getByText('2');
		const elem3 = screen.getByText('3');
		expect(elem1).toBeInTheDocument();
		expect(elem2).toBeInTheDocument();
		expect(elem3).toBeInTheDocument();
	});

	test('foreach component multiarray renders all components', () => {
		const array1 = ['1', '2'];
		const array2 = ['0', '1'];
		render(
			<ForEach array={array1}>
				<ForEach
					array={array2}
					element={({ value }) => (
						<p>{String(value[0]) + String(value[1])}</p>
					)}
				/>
			</ForEach>
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
});
