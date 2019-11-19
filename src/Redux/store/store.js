// We import Redux and Redux-saga dependencies
import {
    createStore,
    applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';
import AllReducer from '../reducers';
import logger from 'redux-logger'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        AllReducer,
        applyMiddleware(sagaMiddleware,logger)
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
export default configureStore;
