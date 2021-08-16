import { initializeStore } from './store';
import { mockApiResponses } from './mockApiResponses';
import { executeThunk } from '../utils';
import { ENDPOINT } from '../constants/constants';
import { imageApproved } from '../store/slices/imagesSlice';

describe('Redux', () => {
  let store;
  // mocking fetch call
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      // return mock respose
      json: () => Promise.resolve(mockApiResponses),
    });
  });

  // this api fetch call actually call the mocking call and return the mock result
  const apiCall = () =>
    fetch(ENDPOINT).then((response) => {
      return response.json();
    });

  beforeEach(async () => {
    store = await initializeStore();
  });

  test('send successfull Api call', async () => {
    const response = await apiCall();
    const payload = { id: response.id, randomImageUrl: response.urls.regular };
    // storing data in store
    await executeThunk(imageApproved(payload), store.dispatch);

    expect(store.getState().images.approvedImageList).toEqual([payload]);
  });
});
