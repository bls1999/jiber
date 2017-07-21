import Action from '../interfaces/action'
import Reducer from '../interfaces/reducer'
import { CONFIRMED_STATE } from './room-actions'
import isConfirmedAction from '../utils/is-confirmed-action'
import patch from '../utils/patch'
import { PATCH } from '../constants/action-types'

export default function (subReducer: Reducer): Reducer {
  return function confirmed (state: any = undefined, action: Action): any {
    if (action.type === CONFIRMED_STATE) {
      return action.confirmed
    }

    if (action.type === PATCH) {
      return patch(state, action.confirmed)
    }

    if (isConfirmedAction(action)) {
      return subReducer(state, action)
    }

    return state
  }
}
