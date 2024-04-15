import { ThemeColor } from '@/style/theme';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

// 상태 타입 정의
interface ThemeState {
  theme: ThemeColor;
  toggleLight: () => void;
  toggleDark: () => void;
}

// 상태 초기값
const initialState: ThemeState = {
  theme: 'dark',
  toggleLight: () => {},
  toggleDark: () => {},
};

const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        toggleLight: () =>
          set((state) => {
            if (state.theme === 'light') return state;
            return { theme: 'light' };
          }),
        toggleDark: () =>
          set((state) => {
            if (state.theme === 'dark') return state;
            return { theme: 'dark' };
          }),
      }),
      {
        name: 'hyemin-editor-storage',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useThemeStore;
