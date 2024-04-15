export type ThemeColor = 'light' | 'dark';
export type FontSize = 'small' | 'default' | 'large' | 'xLarge';
export type PointColor = 'green' | 'yellow' | 'blue' | 'orange';

interface Theme {
  name: ThemeColor;
  systemColor: {
    header: string;
    sidebar: string;
    main: string;
    active: string;
    font: string;
    secondaryFont: string;
    border: string;
  };
  fontSize: {
    [key in FontSize]: string;
  };
  pointColor: {
    [key in PointColor]: string;
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
    secondaryFont: '#ccc',
    border: '#373660',
  },
  fontSize: {
    small: '0.9rem',
    default: '1rem',
    large: '1.5rem',
    xLarge: '2rem',
  },
  pointColor: {
    green: '#15F5BA',
    yellow: '#FFFD8C',
    blue: '#B6FFFA',
    orange: '#FFC700',
  },
};

export const lightTheme: Theme = {
  ...darkTheme,
  name: 'light',
  systemColor: {
    header: '#fff',
    sidebar: '#f6f8fa',
    main: '#fff',
    active: '#e8eaed',
    font: '#24292E',
    secondaryFont: '#666',
    border: '#f0f0f0',
  },
  pointColor: {
    green: '#00DFA2',
    yellow: '#F8DE22',
    blue: '#6499E9',
    orange: '#FFB84C',
  },
};
