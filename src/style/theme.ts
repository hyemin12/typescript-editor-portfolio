export type ThemeColor = 'light' | 'dark';

interface Theme {
  name: ThemeColor;
  systemColor: {
    header: string;
    sidebar: string;
    main: string;
    active: string;
    font: string;
  };
}

export const darkTheme: Theme = {
  name: 'dark',
  systemColor: {
    header: '#24253C',
    sidebar: '#1F2032',
    main: '#373660',
    active: '#373660',
    font: '#fff',
  },
};

export const lightTheme: Theme = {
  name: 'light',
  systemColor: {
    header: '#fff',
    sidebar: '#f6f8fa',
    main: '#fff',
    active: '#e8eaed',
    font: '#24292E',
  },
};
