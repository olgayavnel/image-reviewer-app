import React from 'react';
import {
  render,
  queryByRole,
  queryByText,
  queryByAltText,
  waitFor,
  getByRole,
  queryByTestId,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import Wrapper from './index';
import { initializeStore } from '../../store/store';

describe('Wrapper', () => {
  let store;
  let container;
  let debug;

  const randomImage = {
    id: '8dUUtHmJv6Y',
    randomImageUrl:
      'https://images.unsplash.com/photo-1628539778543-dc4329a8ccd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTM4NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjkwNDA2ODc&ixlib=rb-1.2.1&q=80&w=1080',
  };

  beforeEach(async () => {
    store = await initializeStore();
  });

  // create a re useable function for component rendering
  const createComponent = () => {
    const wrapper = render(
      <Provider store={store}>
        <Wrapper
          isLoading
          randomImage={randomImage}
          generateNewRandomImage={() => jest.fn()}
        />
      </Provider>
    );
    container = wrapper.container;
    debug = wrapper.debug;
    return container;
  };

  // we use different html element selector to just show you how we can select html using different selector

  test('display a header title', async () => {
    createComponent();

    expect(
      queryByText(container, 'YOUR PERSONAL IMAGE ASSISTENT', { selector: 'p' })
    ).toBeInTheDocument();
  });

  test('display a large button and instructional text at footer', async () => {
    createComponent();
    // using JS querySelector to select a element and checking it is visible on UI or not.
    expect(
      container.querySelector('button[role="large-button"]')
    ).toBeInTheDocument();
    expect(queryByRole(container, 'footer-copy')).toBeInTheDocument();
  });

  describe('When click on', () => {
    let largeButton;

    beforeEach(() => {
      createComponent();

      largeButton = container.querySelector('button[role="large-button"]');
      userEvent.click(largeButton);
    });

    test('large button. it should display a image, approve and reject button when click on large button', async () => {
      expect(largeButton).not.toBeInTheDocument();

      // it await unit html element visible on screen
      await waitFor(() =>
        expect(
          queryByAltText(container, 'unsplashImage', { selector: 'img' })
        ).toBeInTheDocument()
      );
      expect(
        getByRole(container, 'button', { name: 'APPROVE' })
      ).toBeInTheDocument();
      expect(
        getByRole(container, 'button', { name: 'REJECT' })
      ).toBeInTheDocument();
    });

    test('approved button. it should display an image in carousel', async () => {
      const approveButton = queryByText(container, 'APPROVE');
      userEvent.click(approveButton);
      // debugging technique
      console.log(
        queryByTestId(container, 'carousel-images').childElementCount
      );
      debug();

      expect(
        queryByTestId(container, 'carousel-images').childElementCount
      ).toBe(1);
      expect(
        queryByAltText(container, 'unsplashImage', { selector: 'img' })
      ).toBeInTheDocument();
    });

    test('reject button. it should display new image and carousel image should same', async () => {
      const rejectButton = queryByText(container, 'REJECT');
      const imageCarousel = queryByTestId(container, 'carousel-images');

      expect(imageCarousel.childElementCount).toBe(0);

      userEvent.click(rejectButton);

      expect(imageCarousel.childElementCount).toBe(0);
      expect(
        queryByAltText(container, 'unsplashImage', { selector: 'img' })
      ).toBeInTheDocument();
    });
  });
});
