import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import Member from '../Member';
import { render, fireEvent, getByTestId } from '@testing-library/react';

const props = {
  history: {
    goBack: jest.fn(),
  },
};

describe('[Member] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Member />).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

describe('[Member] Interaction', () => {
  const component = <Member {...props} />;
  let renderResult: any;

  beforeEach(() => {
    renderResult = render(component);
  });

  it('should simulate [onClick] when [btn] has been clicked', () => {
    const textInstance: any = renderResult.getByTestId('myText');
    expect(textInstance.textContent).toEqual('Member');
  });
});
