import { ThemeColor } from '@/style/theme';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

// 상태 타입 정의
interface ThemeState {
  theme: ThemeColor;
  toggleTheme: () => void;
}

// 상태 초기값
const initialState: ThemeState = {
  theme: 'dark',
  toggleTheme: () => {},
};

const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      }),
      {
        name: 'hyemin-editor-storage',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useThemeStore;
