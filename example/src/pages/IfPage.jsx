import React from 'react';
import { IfBlock, If, Else } from 'react-logic-components';

import PageComponent from '../components/PageComponent';

const IfPageProps = {
  title: 'If.jsx',
  components: [
    { name: 'If' },
    { name: 'IfBlock' },
    { name: 'ElseIf' },
    { name: 'Else' },
  ],
  example: {
    code: (
      "<IfBlock>\n" +
      "  <If condition={true}>\n" +
      "    <p>Hello World!</p>\n" +
      "  <If/>\n" +
      "  <Else>\n" +
      "    <p>Goodbye World!</p>\n" +
      "  </Else>\n" +
      "<IfBlock/>\n"
    ),
    result: (
      <IfBlock>
        <If condition={true}>
          <p>Hello World!</p>
        </If >
        <Else>
          <p>Goodbye World!</p>
        </Else>
      </IfBlock >
    ),
  },
}

const IfPage = React.memo(PageComponent(IfPageProps));

export default IfPage;