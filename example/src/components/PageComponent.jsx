import { ForEach } from 'react-logic-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

const PageComponent = props => () => (
  <>
    <h1>{props.title}</h1>
    <Container as="section">
      <h2>Components</h2>
      <ListGroup>
        <ForEach array={props.components}>
          {props => (
            <ListGroup.Item>
              {props.value.name}
            </ListGroup.Item>
          )}
        </ForEach>
      </ListGroup>
    </Container>
    <Container as="section">
      <h2>Example</h2>
      <Container>
        <h3>Code</h3>
        <code style={{ "white-space": "pre-wrap" }}>
          {props.example.code}
        </code>
      </Container>
      <br/>
      <Container>
        <h3>Result</h3>
        {props.example.result}
      </Container>
    </Container>
  </>
)

export default PageComponent;