import React from 'react';

import { render, fireEvent } from '../../../../tests/config';

import { screen } from '@testing-library/react';

import FlatButton from '../';

const btnLabel = 'Button Label';
const btnAction = jest.fn();

test('shows the children when the button is created', () => {
  render(<FlatButton label={btnLabel} />);

  expect(screen.getByText(btnLabel, { exact: false }));
});

test('function is called when the button is clicked', () => {
  render(<FlatButton label={btnLabel} onClick={btnAction} />);

  fireEvent.click(screen.getByText(btnLabel));

  expect(btnAction).toHaveBeenCalled();
});
