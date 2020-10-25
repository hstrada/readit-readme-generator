import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { readitLightTheme } from '../theme';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }: any) => {
  return <ThemeProvider theme={readitLightTheme}>{children}</ThemeProvider>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
