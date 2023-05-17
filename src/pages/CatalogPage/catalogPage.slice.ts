import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';

const tempProducts = [
  {
    id: 1,
    title: 'Product 1',
    imageColor: 'red',
    colors: ['black', 'orange'],
    sizes: ['XS', 'S', 'L'],
    price: 1000,
  },
  {
    id: 2,
    title: 'Product 2',
    imageColor: 'yellow',
    colors: ['black', 'white'],
    sizes: ['S', 'L'],
    price: 200,
  },
  {
    id: 3,
    title: 'Product 3',
    imageColor: 'green',
    colors: ['red', 'white'],
    sizes: ['L', 'XL'],
    price: 400,
  },
  {
    id: 4,
    title: 'Product 4',
    imageColor: 'blue',
    colors: ['orange'],
    sizes: ['XS', 'S'],
    price: 500,
  },
  {
    id: 5,
    title: 'Product 5',
    imageColor: 'deepskyblue',
    colors: ['white'],
    sizes: ['XS', 'L'],
    price: 1000,
  },
  {
    id: 6,
    title: 'Product 6',
    imageColor: 'lightgreen',
    colors: ['black', 'blue'],
    sizes: ['L'],
    price: 600,
  },
  {
    id: 7,
    title: 'Product 7',
    imageColor: 'purple',
    colors: ['white', 'green', 'yellow'],
    sizes: ['XS', 'S', 'L', 'XL'],
    price: 700,
  },
  {
    id: 8,
    title: 'Product 8',
    imageColor: 'tomato',
    colors: ['red', 'orange'],
    sizes: ['M'],
    price: 200,
  },
];

interface CatalogPageState {
  products: Product[];
  filteredProduct: Product[];
}

const initialState: CatalogPageState = {
  products: tempProducts,
  filteredProduct: tempProducts,
};

interface FilterPayload {
  priceFrom: number;
  priceTo: number;
  size?: string;
  color?: string;
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: initialState,
  reducers: {
    filter: (state, action: PayloadAction<FilterPayload>) => {
      state.filteredProduct = state.products.filter(
        (product) =>
          product.price >= action.payload.priceFrom &&
          product.price <= action.payload.priceTo &&
          ((action.payload.size && product.sizes.indexOf(action.payload.size) > -1) ||
            !action.payload.size) &&
          ((action.payload.color && product.colors.indexOf(action.payload.color) > -1) ||
            !action.payload.color),
      );
    },
  },
});

export const { filter } = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
