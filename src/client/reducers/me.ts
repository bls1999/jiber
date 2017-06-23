import { Action, UserState, LOGIN_RESULT } from '../../core/index'

export default function me (
  state: UserState = {userId: ''},
  action: Action
): UserState {
  switch (action.type) {
    case LOGIN_RESULT:
      return action.user

    default:
      return state
  }
}
