import React from 'react';

import { render, fireEvent } from '../../../tests/config';

import { screen } from '@testing-library/react';

import Generator from '../';

test('when the user press add new topic button', () => {
  const container = render(<Generator />);

  const addNewTopicButton = container.getByTestId('add-new-topic');

  fireEvent.click(addNewTopicButton);

  expect(container.getByTestId('future-improvements')).toBeTruthy();
});
