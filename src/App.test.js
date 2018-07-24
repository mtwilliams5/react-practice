import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('a test block', () => {
  it('should be 42', () => {
    expect(40 + 2).toEqual(42);
  })

  it('should match snapshot', () => {
    expect(40 + 2).toMatchSnapshot();
  });
});