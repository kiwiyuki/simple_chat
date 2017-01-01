import { FETCH_ALL_MESSAGES, NEW_MESSAGE/* , SEND_MESSAGE*/ } from '../actions'
import { handleActions } from 'redux-actions'
const initialState = {
  messageList: []
}

const messagesReducers = handleActions({
  [FETCH_ALL_MESSAGES]: (state, action) => {
    return {
      ...state,
      messageList: action.payload.messageList
    }
  },
  [NEW_MESSAGE]: (state, action) => {
    const { message, user } = action.payload
    return {
      ...state,
      messageList: [
        ...state.messageList,
        {
          user,
          message
        }
      ]
    }

  }
}, initialState)

export default messagesReducers
