// Import the watcher we have just created
import {
    watchGetArticle
} from './Articles';
import {call  } from 'redux-saga/effects'

export default function* rootSaga () {
// We start all the sagas in parallel
    yield call(watchGetArticle);
}
