import { Product } from "@/types/productpage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ProductCartState {
  cart: Array<Product>;
}
const initialState: ProductCartState = {
  cart: [],
};
export const cartSlice = createSlice({
  initialState,
  name: "Cart",
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      let temp = [...state.cart, action.payload];
      state.cart = [...temp];
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      let temp = state.cart.filter(
        (product: Product) => product?.id !== action.payload?.id
      );
      state.cart = [...temp];
    },
  },
});
export const {addItem,removeItem}=cartSlice.actions;
export default cartSlice.reducer;
