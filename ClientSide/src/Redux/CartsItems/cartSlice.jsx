import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.amount += newItem.amount || 1;
      } else {
        state.items.push(newItem);
      }

      // Update totalItems and totalAmount
      state.totalItems += newItem.amount || 1;
      state.totalAmount += (Math.round(newItem.price || 0)) * Math.round((newItem.amount || 1));
    },
    increaseItemCount: (state, action) => {
      const { id } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.amount += 1;
        state.totalItems += 1;
        state.totalAmount += Math.round(itemToUpdate.price) ||  0;
      }
    },

    decreaseItemCount: (state, action) => {
      const { id } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate && itemToUpdate.amount >= 2) {
        // Decrease the amount only if it's greater than or equal to 2
        itemToUpdate.amount -= 1;
        state.totalItems -= 1;
        state.totalAmount -= Math.round(itemToUpdate.price)|| 0;
      }
      // Optionally, you can remove the item when the amount becomes 0
    },

    removeItem: (state, action) => {
      const { id } = action.payload;
      const removedItem = state.items.find((item) => item.id === id);

      if (removedItem) {
        state.totalItems -= removedItem.amount;
        state.totalAmount -= (removedItem.price || 0) * removedItem.amount;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = null;
      state.totalAmount = null;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemCount,
  decreaseItemCount,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) => state.cart.totalItems ||0;
export const selectTotalAmount = (state) => state.cart.totalAmount;

export default cartSlice.reducer;
