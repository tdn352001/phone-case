import {
  AsyncThunk,
  AsyncThunkPayloadCreator,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { AppDispatch, RootState } from 'renderer/store';

type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
};

export const createAppAsyncThunk = <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    AsyncThunkConfig
  >,
): AsyncThunk<Returned, ThunkArg, AsyncThunkConfig> => {
  return createAsyncThunk<Returned, ThunkArg>(typePrefix, payloadCreator);
};
