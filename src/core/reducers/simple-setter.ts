interface SetterState {
  [key: string]: any
}

interface SetterAction {
  type?: string,
  key?: string,
  value?: any
}

// Actions
const SET = 'hope/simpleSetter/SET'

// Reducer
export default function reducer (
  state: SetterState,
  action: SetterAction = {}
): SetterState {
  switch (action.type) {
    case undefined:
      return {}

    case SET:
      return {
        ...state,
        [action.key]: action.value
      }
  }
}

// Action Creators
export function set (key: string, value: any) {
  return {type: SET, key, value}
}
