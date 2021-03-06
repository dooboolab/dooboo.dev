import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import Post from '../Post';
import { render, fireEvent, getByTestId } from '@testing-library/react';

const props = {
  history: {
    goBack: jest.fn(),
  },
};

describe('[Post] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Post />).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

describe('[Post] Interaction', () => {
  const component = <Post {...props} />;
  let renderResult: any;

  beforeEach(() => {
    renderResult = render(component);
  });

  it('should simulate [onClick] when [btn] has been clicked', () => {
    const textInstance: any = renderResult.getByTestId('myText');
    expect(textInstance.textContent).toEqual('Post');
  });
});
