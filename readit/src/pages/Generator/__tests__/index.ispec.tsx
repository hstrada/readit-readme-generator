import React from 'react';

import { render, fireEvent } from '../../../tests/config';

import { waitFor } from '@testing-library/react';

import Generator from '../';

test('when the user press add new topic button', async () => {
  const container = render(<Generator />);

  const addNewTopicButton = container.getByTestId('add-new-topic');

  fireEvent.click(addNewTopicButton);

  await waitFor(() => container.getByTestId('future-improvements'));

  expect(container.getAllByTestId('future-improvements').length).toBe(1);
});
