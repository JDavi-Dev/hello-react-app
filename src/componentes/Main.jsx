import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Main = () => {
  let nome = 'Simone';

  let nomes = ['Maria', 'João', 'Marcos'];
  //let lista = () => <ul> + nomes.map((nome) => `<li>${nome}</li>`) + </ul>
  const getNome = () => nome;

  return (
    <main>
      <Container fluid className="mt-2">
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1552346988-bf70b50d3c98?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Card.Body>
                <Card.Title>Plantio</Card.Title>
                <Card.Text>
                O plantio é feito em período chuvoso e, ao redor da muda, é indicado o uso de cobertura morta.
                </Card.Text>
                <Button variant="primary">Saiba mais</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1715424584663-d793ce153a03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Card.Body>
                <Card.Title>Colheita</Card.Title>
                <Card.Text>
                A colheita do café pode ser realizada de três formas diferentes: manual, semimecanizada e mecanizada. 
                </Card.Text>
                <Button variant="primary">Saiba mais</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1682148098085-72b02a2d6604?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Card.Body>
                <Card.Title>Torra do café</Card.Title>
                <Card.Text>
                A torra do café é uma das etapas finais da produção antes de chegar na sua xícara.
                </Card.Text>
                <Button variant="primary">Saiba mais</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
