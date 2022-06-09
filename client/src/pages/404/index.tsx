import { Container } from './styles';

interface NotFoundProps {}

export const NotFound = ({}: NotFoundProps) => {
  return (
    <Container>
      <h1>Not Found - Error 404</h1>
    </Container>
  );
};
