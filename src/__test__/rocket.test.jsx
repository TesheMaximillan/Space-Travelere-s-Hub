/* eslint-disable no-whitespace-before-property */
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/rockets/Rocket';

const RockeT = {
  rocketImg: 'rocketsImg',
  rocketName: 'rocketName',
  rocketId: 'rocketId',
  description: 'description',
  status: 'true',
};

it('renders correctly', () => {
  const tree = renderer .create(
    <Provider store={store}>
      <Rocket key={1} rocket={RockeT} />
      {' '}

    </Provider>,
  ) .toJSON();
  expect(tree).toMatchSnapshot();
});
