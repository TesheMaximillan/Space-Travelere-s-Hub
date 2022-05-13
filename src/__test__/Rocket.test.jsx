/* eslint-disable no-whitespace-before-property */
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../routes/Rockets';

it('renders correctly', () => {
  const tree = renderer .create(
    <Provider store={store}>
      <Rockets />
      {' '}

    </Provider>,
  ) .toJSON();
  expect(tree).toMatchSnapshot();
});
