import { useTypedSelector } from './useTypedSelector'
import { IInitialState } from '../store/user/user.interface'

export const useAuth = () => useTypedSelector<IInitialState>(state => state.user)
