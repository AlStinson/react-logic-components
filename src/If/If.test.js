import React from 'react';
import { render, screen } from '@testing-library/react';
import If from './If';
import IfBlock from './IfBlock';
import ElseIf from './ElseIf';
import Else from './Else';
import messages from './IfBlockLogsMessages';


describe('If tests', () => {
	test('if component renders element with props if condition is true', () => {
		const p = props => <p>{props.string}</p>;
		render(
			<>
				<If condition={true} element={p} elementProps={{ string: 'Hello Element!' }} />
				<If condition={true} elementProps={{ string: 'Hello Children!' }}>{p}</If>
			</>
		);
		const elementCompoment = screen.getByText('Hello Element!');
		const childrenComponent = screen.getByText('Hello Children!');
		expect(elementCompoment).toBeInTheDocument();
		expect(childrenComponent).toBeInTheDocument();
	});

	test('if component not executes element if condition is false', () => {
		const error = () => { throw new Error(); };
		const renderIfs = () => render(
			<>
				<If condition={false} element={error} />
				<If condition={false}>{error}</If>
			</>
		);

		expect(renderIfs).not.toThrow();
	});

	//TODO: test warn of children and element on if, elseif, else;
	//TODO: test empty ifBlock;
	//TODO: add props check for render children;
	test('ifblock components renders if child', () => {
		render(
			<IfBlock>
				<If condition={true} element={() => 'True'} />
				<ElseIf condition={false} element={() => 'False'} />
				<Else element={() => 'False'} />
			</IfBlock>
		);

		const trueElement = screen.getByText('True');
		const falseElements = screen.queryAllByText('False');
		expect(trueElement).toBeInTheDocument();
		expect(falseElements).toHaveLength(0);
	});

	test('ifblock components renders elseif child', () => {
		render(
			<IfBlock>
				<If condition={false} element={() => 'False'} />
				<ElseIf condition={true} element={() => 'True'} />
				<Else element={() => 'False'} />
			</IfBlock>
		);

		const trueElement = screen.getByText('True');
		const falseElements = screen.queryAllByText('False');
		expect(trueElement).toBeInTheDocument();
		expect(falseElements).toHaveLength(0);
	});

	test('ifblock components renders else child', () => {
		render(
			<IfBlock>
				<If condition={false} element={() => 'False'} />
				<ElseIf condition={false} element={() => 'False'} />
				<Else element={() => 'True'} />
			</IfBlock>
		);

		const trueElement = screen.getByText('True');
		const falseElements = screen.queryAllByText('False');
		expect(trueElement).toBeInTheDocument();
		expect(falseElements).toHaveLength(0);
	});

	test('ifblock component no render', () => {
		render(
			<IfBlock>
				<If condition={false} element={() => 'False'} />
				<ElseIf condition={false} element={() => 'False'} />
			</IfBlock>
		);
		const falseElements = screen.queryAllByText('False');
		expect(falseElements).toHaveLength(0);
	});

	test('ifblock component with no if in fist children throws warn on development', () => {
		console.warn = jest.fn();
		render(
			<IfBlock>
				<Else element={() => 1}/>
			</IfBlock>
		);

		expect(console.warn).toHaveBeenCalledWith(messages.fstChildren);
	});

	test('ifblock component with if in last children throws warn on development', () => {
		console.warn = jest.fn();
		render(
			<IfBlock>
				<If condition={false} element={() => 1}/>
				<If condition={true} element={() => 1}/>
			</IfBlock>
		);

		expect(console.warn).toHaveBeenCalledWith(messages.lstChildren);
	});

	test('ifblock component with if or else in intermediate children throws warn on development', () => {
		console.warn = jest.fn();
		render(
			<IfBlock>
				<If condition={false} element={() => 1}/>
				<If condition={false} element={() => 1}/>
				<Else element={() => 1}/>
				<Else element={() => 1}/>
			</IfBlock>
		);

		expect(console.warn).toHaveBeenCalledWith(messages.intermediateChildren);
		expect(console.warn).toHaveBeenCalledTimes(2);
	});

	test('ifblock component with only one if children throws warn on development', () => {
		console.warn = jest.fn();
		render(
			<IfBlock>
				<If condition={true} element={() => 1}/>
			</IfBlock>
		);
		
		expect(console.warn).toHaveBeenCalledWith(messages.onlyIf);
	});

	// TODO: Test errors messages;
});
