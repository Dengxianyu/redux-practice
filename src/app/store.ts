import { configureStore, createListenerMiddleware, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer, { incrementByAmount } from '../features/counter/counterSlice';
import testSlice, { incrementAsync } from '../features/counter/testSlice';

const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
  actionCreator: incrementByAmount,
  effect: (action, listenerApi) => {
    console.log(action, listenerApi);
    listenerApi.dispatch(incrementAsync(action.payload));
  }
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    test: testSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
