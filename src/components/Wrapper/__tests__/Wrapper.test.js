import React from 'react';
import {
  fireEvent,
  getByRole,
  render,
  render as rtlRender,
  screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { Wrapper } from './../Wrapper';
import { store } from './../../../store/store';

import userEvent from '@testing-library/user-event';

const renderWithRedux = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

test('render with redux', () => {
  renderWithRedux(<Wrapper />);

  // Extract button node
  const button = screen.getByRole('large-button');
  // click button
  userEvent.click(button);
  expect(button).toBeDisabled();
});
