import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

test('renders homepage breadcrumb label', () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  const breadcrumbItem = screen.getByText(/Homepage/i);
  expect(breadcrumbItem).toBeInTheDocument();
});
