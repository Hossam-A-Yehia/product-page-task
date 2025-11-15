import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductActions } from '../components/Product/ProductActions';

describe('ProductActions', () => {
  test('calls onAddToCart when Add To Cart is clicked', async () => {
    const onAddToCart = jest.fn();

    render(<ProductActions onAddToCart={onAddToCart} />);

    const addButton = screen.getByRole('button', { name: /add to cart/i });
    await userEvent.click(addButton);

    expect(onAddToCart).toHaveBeenCalledTimes(1);
  });

  test('calls onCheckout when Checkout Now is clicked', async () => {
    const onCheckout = jest.fn();

    render(<ProductActions onAddToCart={() => {}} onCheckout={onCheckout} />);

    const checkoutButton = screen.getByRole('button', { name: /checkout now/i });
    await userEvent.click(checkoutButton);

    expect(onCheckout).toHaveBeenCalledTimes(1);
  });
});
