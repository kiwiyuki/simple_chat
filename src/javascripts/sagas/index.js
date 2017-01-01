import io from 'socket.io-client'
import { eventChannel } from 'redux-saga'
import { put, call, fork, take } from 'redux-saga/effects'
import { sendMessage, newMessage } from '../actions'

const connect = () => {
  const socket = io('http://localhost:3000')
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket)
    })
  })
}

const subscribe = socket => {
  return eventChannel(emit => {
    socket.on('message.new', ({ user, message }) => {
      emit(newMessage({ user, message }))
    })
    // socket.on('disconnect', () => {
    //
    // })
    return () => {}
  })
}

function* read(socket) {
  const channel = yield call(subscribe, socket)
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let action = yield take(channel)
    yield put(action)
  }
}

function* write(socket) {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload } = yield take(`${sendMessage}`)
    socket.emit('message', payload)
  }
}

function* handleIO(socket) {
  yield fork(read, socket)
  yield fork(write, socket)
}

function* flow() {
  // eslint-disable-next-line no-constant-condition
  // while (true) {
  const socket = yield call(connect)
  yield fork(handleIO, socket)
    // const task = yield fork(handleIO, socket)
    // yield take(`${logout}`)
    // yield cancel(task)
  // }
}

export default function* rootSaga() {
  yield fork(flow)
}

if (process.env.NODE_ENV === 'test') {
  module.exports = {rootSaga, connect, read, write, handleIO, flow}
}
