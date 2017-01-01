import { createAction } from 'redux-actions'

export const FETCH_ALL_MESSAGES = 'FETCH_ALL_MESSAGES'
export const fetchAllMessages = createAction(FETCH_ALL_MESSAGES)

export const SEND_MESSAGE = 'SEND_MESSAGE'
export const sendMessage = createAction(SEND_MESSAGE, (user, message) => {
  return { user, message }
})

export const NEW_MESSAGE = 'NEW_MESSAGE'
export const newMessage = createAction(NEW_MESSAGE)
