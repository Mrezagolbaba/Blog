
import {takeLatest,takeEvery} from 'redux-saga/effects';
import {
    put,
    call
} from 'redux-saga/effects';
import {
    GET_ARTICLE
} from '../constants';

import { getArticleSuccess,getArticleFailure } from '../actions';
const fetchArticle = () => {
    return fetch('http://localhost:3000/api/articles', {
       method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'X-Requested-With':'XMLHttpRequest',
        }
    })
        .then(response => response.json())
};

function* getArticle () {
    try {
        const receiveArticle = yield call(fetchArticle);
        yield put(getArticleSuccess(receiveArticle));
    } catch (err) {
        yield put(getArticleFailure());
    }
}
function* watchGetArticle () {
    yield takeEvery(GET_ARTICLE, getArticle);
}

export {
    watchGetArticle
};
