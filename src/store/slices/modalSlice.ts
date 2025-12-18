import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: (() => void) | null;
  onCancel: (() => void) | null;
}

const initialState: ModalState = {
  isOpen: false,
  title: "",
  message: "",
  confirmText: "Confirm",
  cancelText: "Cancel",
  onConfirm: null,
  onCancel: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        title: string;
        message: string;
        confirmText?: string;
        cancelText?: string;
        onConfirm?: () => void;
        onCancel?: () => void;
      }>
    ) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.confirmText = action.payload.confirmText || "Confirm";
      state.cancelText = action.payload.cancelText || "Cancel";
      state.onConfirm = action.payload.onConfirm || null;
      state.onCancel = action.payload.onCancel || null;
    },
    closeModal: (state) => {
      state.isOpen = false;
      // Keep content for animation, will be cleared by clearModalContent
    },
    clearModalContent: (state) => {
      state.title = "";
      state.message = "";
      state.confirmText = "Confirm";
      state.cancelText = "Cancel";
      state.onConfirm = null;
      state.onCancel = null;
    },
  },
});

export const { openModal, closeModal, clearModalContent } = modalSlice.actions;
export default modalSlice.reducer;
