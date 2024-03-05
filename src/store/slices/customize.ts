import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authService } from '~/services/auth-service'
import { User } from '~/services/auth-service/type'
import { RootState } from '~/store'

interface CustomizeState {
  modal?: 'stickers' | 'text' | 'templates' | 'layers'
  selectedElement?: any
  elements: any[]
  history: any[]
}

const initialState: CustomizeState = {
  modal: undefined,
  selectedElement: undefined,
  elements: [],
  history: [],
}

const sliceName = 'customize'

const customizeSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<CustomizeState['modal']>) => {
      state.modal = action.payload
    },
    setSelectedElement: (state, action: PayloadAction<CustomizeState['selectedElement']>) => {
      state.selectedElement = action.payload
    },
    setElements: (state, action: PayloadAction<CustomizeState['elements']>) => {
      state.elements = action.payload
    },
    setHistory: (state, action: PayloadAction<CustomizeState['history']>) => {
      state.history = action.payload
    },
  },
  extraReducers: (builder) => {},
})

export const customizeActions = {
  ...customizeSlice.actions,
}

export const customizeSelectors = {
  isStickerModal: (state: RootState) => state[sliceName].modal === 'stickers',
  isTextModal: (state: RootState) => state[sliceName].modal === 'text',
  isTemplatesModal: (state: RootState) => state[sliceName].modal === 'templates',
  isLayersModal: (state: RootState) => state[sliceName].modal === 'layers',
  selectModal: (state: RootState) => state[sliceName].modal,
  selectSelectedElement: (state: RootState) => state[sliceName].selectedElement,
  selectElements: (state: RootState) => state[sliceName].elements,
  selectHistory: (state: RootState) => state[sliceName].history,
}

export default customizeSlice
