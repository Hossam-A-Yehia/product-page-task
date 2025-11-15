import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "../App";
import { getProduct } from "../api/productApi";
import type { Product } from "../types";

jest.mock("../api/productApi");
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
  },
}));

const createTestProduct = (): Product => ({
  id: "product-1",
  name: "Test Product",
  slug: "test-product",
  description: "Test description",
  price: 100,
  sale_price: 80,
  thumb: "/image.jpg",
  images: [],
  variations: [
    {
      id: "variation-color",
      name: "color",
      product_id: "product-1",
      type: "image",
      props: [
        { id: "color-brown", name: "brown", variation_id: "variation-color" },
      ],
    },
  ],
  variants: [
    {
      id: "variant-1",
      product_id: "product-1",
      price: 100,
      sale_price: 80,
      quantity: 10,
      variation_props: [
        {
          id: "vp-1",
          variation: "color",
          variation_prop: "brown",
          product_variant_id: "variant-1",
        },
      ],
      isAvailable: true,
    },
  ],
  categories: [],
  store_id: "store-1",
  position: 0,
  hidden: false,
  quantity: 0,
  track_stock: false,
  disable_orders_for_no_stock: false,
  buy_now_text: "Buy now",
  is_fixed_bottom_buy: false,
  is_one_page_checkout: false,
  is_quantity_hidden: false,
  is_header_hidden: false,
  is_free_shipping: false,
  custom_currency: "",
  show_landing_in_same_page: false,
  is_checkout_before_description: false,
  hide_related_products: false,
  fake_visitors_min: 0,
  fake_visitors_max: 0,
  fake_timer_hours: 0,
  is_taager_submit_active: false,
  is_ecombo_submit_active: false,
  is_mosaweq_submit_active: false,
  is_alturky_submit_active: false,
  is_jamaica_submit_active: false,
  is_engzny_submit_active: false,
  is_digital: false,
  is_cloaking_active: false,
  created_at: "",
  updated_at: "",
});

const mockedGetProduct = getProduct as jest.MockedFunction<typeof getProduct>;

beforeEach(() => {
  mockedGetProduct.mockResolvedValue(createTestProduct());
});

test("user can load product and see Add To Cart button", async () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  expect(await screen.findByText(/Test Product/i)).toBeInTheDocument();

  const addButton = await screen.findByRole("button", { name: /add to cart/i });
  await userEvent.click(addButton);

  expect(await screen.findByText(/Shopping Cart/i)).toBeInTheDocument();
});
