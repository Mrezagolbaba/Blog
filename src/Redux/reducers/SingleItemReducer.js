import {
    GET_SINGLE_ARTICLE_SUCCESS,
    GET_SINGLE_ARTICLE_FAILURE, GET_SINGLE_ARTICLE
} from '../constants';
const initialStateSingle = [];
export const SingleArticleReducer = (state = initialStateSingle, action={}) => {

    switch (action.type) {
        case GET_SINGLE_ARTICLE:
            return {
                ...state,
                slug: action.slug
            };
        case GET_SINGLE_ARTICLE_SUCCESS:
            return  {
                ...state,
                receiveArticleSingle:action.receiveArticleSingle
            };
        case  GET_SINGLE_ARTICLE_FAILURE:
            return [];
        default:
            return state;

    }
};

