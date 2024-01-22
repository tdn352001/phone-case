import { EqualityFn, shallowEqual } from 'react-redux'
import { useAppSelector } from '~/hooks/redux/use-app-selector'
import { RootState } from '~/store'

type Selector<T> = (state: RootState) => T

export const useShallowEqualSelector = <TSelected>(
  selector: Selector<TSelected>,
  equalityFn?: EqualityFn<TSelected>
) => {
  return useAppSelector(selector, equalityFn ?? shallowEqual)
}
