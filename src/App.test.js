import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getAllByText(/Accounts/i).length).toEqual(2);
});
