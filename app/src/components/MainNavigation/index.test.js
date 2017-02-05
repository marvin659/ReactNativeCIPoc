import 'react-native';
import React from 'react';
import { MainNavigation } from './index';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MainNavigation />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
