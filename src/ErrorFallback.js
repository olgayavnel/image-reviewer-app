import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  justify-content: center;
  align-items: center;
  color: #2b4893;
`;

const ErrorButton = styled.button`
  font-family: 'Poppins', sans-serif;
  color: #2b4893;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  border: 3px solid #d1defe;
  background: transparent;
  border-radius: 10px;
  padding: 0.2rem 0.5rem;
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Section role='alert'>
      <p>Something went wrong:</p>
      <p>{error.message}</p>
      <ErrorButton onClick={resetErrorBoundary}>Try again</ErrorButton>
    </Section>
  );
}

export default ErrorFallback;
