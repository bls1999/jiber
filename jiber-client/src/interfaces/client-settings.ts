import { Reducer, Middleware } from 'jiber-core'

/**
 * The settings passed in will have their gaps filled with defaults
 * to create an object that always confirms to this interface
 */
export interface ClientSettings {
  credential: string|undefined
  middleware: Array<Middleware>,
  reducer: Reducer,
  url: string,
  socketPort: number,
  stunPort: number,
  initialState: any,
  backoffMs: number
}