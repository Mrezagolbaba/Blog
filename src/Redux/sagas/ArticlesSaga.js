
import {takeEvery} from 'redux-saga/effects';
import {put, call,select} from 'redux-saga/effects';
import {GET_ARTICLE, GET_SINGLE_ARTICLE,} from '../constants';

import {
    getArticleSuccess,
    getArticleFailure,
    getArticleSuccessSingle,
    getArticleFailureSingle
} from '../actions';


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


const fetchArticleSingle = (slug) => {

    return fetch('http://localhost:3000/api/articles/'+slug, {
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

function* getArticleSingle () {
    const slug = yield select((state)=>{
        return state.SingleArticleReducer.slug
    });
    if(slug){
        try {
            const receiveArticleSingle = yield call[fetchArticleSingle(slug)] ;
            yield put(getArticleSuccessSingle(receiveArticleSingle));
        } catch (err) {
            yield put(getArticleFailureSingle());
        }
    }

}



function* watchGetArticle () {

    yield takeEvery(GET_ARTICLE, getArticle);

    yield takeEvery(GET_SINGLE_ARTICLE, getArticleSingle);

}

export {
    watchGetArticle
};
