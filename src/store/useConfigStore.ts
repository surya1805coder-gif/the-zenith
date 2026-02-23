import { create } from 'zustand';

interface ConfigState {
    currentModel: string;
    paintColor: string;
    rimType: string;
    basePrice: number;
    totalPrice: number;
    isProcessing: boolean;
    checkoutStep: number; // 0: Review, 1: Processing, 2: Success

    // Actions
    setModel: (model: string, price: number) => void;
    setPaintColor: (color: string, fee: number) => void;
    setRimType: (rim: string, fee: number) => void;
    setProcessing: (processing: boolean) => void;
    setCheckoutStep: (step: number) => void;
}

export const useConfigStore = create<ConfigState>((set) => ({
    currentModel: 'Phantom Zenith',
    paintColor: '#000000',
    rimType: 'Standard',
    basePrice: 450000,
    totalPrice: 450000,
    isProcessing: false,
    checkoutStep: 0,

    setModel: (model, price) => set((state) => ({
        currentModel: model,
        basePrice: price,
        totalPrice: price + (state.totalPrice - state.basePrice)
    })),

    setPaintColor: (color, fee) => set((state) => ({
        paintColor: color,
        totalPrice: state.basePrice + fee + (state.rimType === 'Performance' ? 15000 : 0)
    })),

    setRimType: (rim, fee) => set((state) => ({
        rimType: rim,
        totalPrice: state.basePrice + (state.paintColor !== '#000000' ? 5000 : 0) + fee
    })),

    setProcessing: (processing) => set({ isProcessing: processing }),
    setCheckoutStep: (step) => set({ checkoutStep: step }),
}));
