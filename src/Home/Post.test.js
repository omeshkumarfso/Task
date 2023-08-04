import React from 'react';
import { render } from '@testing-library/react-native';
import Post from './Post';

describe('Post Component', () => {
  const mockRoute = {
    params: {
      item: {
        id: 1,
        title: 'Test Title',
        body: 'Test Body',
      },
    },
  };

  it('renders title and body correctly', () => {
    const { getByText } = render(<Post route={mockRoute} />);

    const titleElement = getByText('Title');
    const bodyElement = getByText('Body');

    expect(titleElement).toBeTruthy();
    expect(bodyElement).toBeTruthy();

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Body')).toBeTruthy();
  });

  // Add more tests for various scenarios
});