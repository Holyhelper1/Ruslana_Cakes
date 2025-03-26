
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface EditingState {
//   isEditingText: boolean;
//   isEditingImage: boolean;
//   isEditingPrice: boolean;
// }

// interface DessertEditingState {
//   [key: string]: EditingState;
// }

// const initialState: DessertEditingState = {};

// export const dessertSlice = createSlice({
//   name: "desserts",
//   initialState,
//   reducers: {
//     // Функция для инициализации состояния, если оно еще не существует
//     initEditingState(state, action: PayloadAction<string>) {
//       const id = action.payload;
//       if (!state[id]) {
//         state[id] = { isEditingText: false, isEditingImage: false, isEditingPrice: false };
//       }
//     },

//     setEditingText(state, action: PayloadAction<{ id: string; isEditing: boolean }>) {
//       const { id, isEditing } = action.payload;
//       // Инициализация состояний, если они еще не существуют
//       if (!state[id]) {
//         state[id] = { isEditingText: false, isEditingImage: false, isEditingPrice: false };
//       }
//       state[id].isEditingText = isEditing;
//     },
    
//     setEditingImage(state, action: PayloadAction<{ id: string; isEditing: boolean }>) {
//       const { id, isEditing } = action.payload;
//       // Инициализация состояний, если они еще не существуют
//       if (!state[id]) {
//         state[id] = { isEditingText: false, isEditingImage: false, isEditingPrice: false };
//       }
//       state[id].isEditingImage = isEditing;
//     },
    
//     setEditingPrice(state, action: PayloadAction<{ id: string; isEditing: boolean }>) {
//       const { id, isEditing } = action.payload;
//       // Инициализация состояний, если они еще не существуют
//       if (!state[id]) {
//         state[id] = { isEditingText: false, isEditingImage: false, isEditingPrice: false };
//       }
//       state[id].isEditingPrice = isEditing;
//     }
//   },
// });

// // Экспортируйте действия
// export const { setEditingText, setEditingImage, setEditingPrice, initEditingState } = dessertSlice.actions;
