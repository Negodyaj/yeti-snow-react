import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';

interface CatalogPageState {
  products: Product[];
  filteredProduct: Product[];
}

const initialState: CatalogPageState = {
  products: [],
  filteredProduct: [],
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
    getProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.filteredProduct = action.payload;
    },
  },
});

export const { filter, getProducts } = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
