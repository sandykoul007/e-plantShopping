import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => { {/* application state to handle adding items  */}
      const {name, image, cost} = action.payload
      const existingItem = state.items.find(item => item.name === name)
      if(existingItem){
        existingItem.quantity++
      } else {
        state.items.push({name, image, cost, quantity: 1})
      }
    
    },

    removeItem: (state, action) => { {/* application state to handle removing items  */}
      state.items = state.items.filter(item => item.name !== action.payload)
    },

    updateQuantity: (state, action) => { {/* application state to handle item quantity  */}
      const { name, quantity} = action.payload
      const itemitemToUpdate = state.items.find(item => item.name === name)
      if (itemitemToUpdate){
        itemitemToUpdate.quantity = quantity
      }

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
