import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../src/components/Header';

test('verifica se o componente Header contém o texto "Victor"', () => {
  render(<Header />);
  const texto = screen.getByText(/Concentrate/i);
  expect(texto).toBeInTheDocument();
});
