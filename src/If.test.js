import React from 'react';
import { render, screen } from '@testing-library/react';
import { If, IfBlock, Else, ElseIf } from './If';

describe('IfBlock test block', () => {
	test('if component renders children if condition is true', () => {
		render(
			<If condition>
				<p>Hello World!</p>
			</If>
		);
		const elem = screen.getByText('Hello World!');
		expect(elem).toBeInTheDocument();
	});

	test('if component no render if condition is false', () => {
		render(
			<If condition={false}>
				<p>Hello World!</p>
			</If>
		);
		const elem = screen.queryByText('Hello World!');
		expect(elem).toBeNull();
	});

	test('ifblock component renders true condition component', () => {
		render(
			<IfBlock>
				<If condition={false}>1</If>
				<ElseIf condition>2</ElseIf>
				<Else>0</Else>
			</IfBlock>
		);
		const elem1 = screen.queryByText('1');
		const elem2 = screen.getByText('2');
		const elemD = screen.queryByText('0');
		expect(elem1).toBeNull();
		expect(elem2).toBeInTheDocument();
		expect(elemD).toBeNull();
	});

	test('ifblock component renders default component if everyone is false', () => {
		render(
			<IfBlock>
				<If condition={false}>1</If>
				<ElseIf condition={false}>2</ElseIf>
				<Else>0</Else>
			</IfBlock>
		);
		const elem1 = screen.queryByText('1');
		const elem2 = screen.queryByText('2');
		const elemD = screen.getByText('0');
		expect(elem1).toBeNull();
		expect(elem2).toBeNull();
		expect(elemD).toBeInTheDocument();
	});
});
