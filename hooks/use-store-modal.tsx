import { create } from "zustand";

interface useStoreModalStore {
	isOpen: boolean;
	onOpen: () => {};
	onClose: () => {};
};

export const useStoreModal = create<useStoreModalStore>((set) => ({
	isOpen: false,
	onOpen: async () => set({ isOpen: true }),
	onClose: async () => set({ isOpen: false }),
}));
