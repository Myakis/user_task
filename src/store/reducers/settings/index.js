import { SET_SIDE_MENU } from './types'

const getInitialState = () => ({
  sideMenuOpen: false,
})

export default function settings(state = getInitialState(), action) {
  switch (action.type) {
    case SET_SIDE_MENU:
      return {
        ...getInitialState(),
        sideMenuOpen: action.payload,
      }

    default:
      return state
  }
}
