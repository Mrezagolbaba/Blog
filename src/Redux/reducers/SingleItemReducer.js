import {
    GET_SINGLE_ARTICLE_SUCCESS,
    GET_SINGLE_ARTICLE_FAILURE, GET_SINGLE_ARTICLE
} from '../constants';
const initialStateSingle = [];
export const SingleArticleReducer = (stateSlug = initialStateSingle, action={}) => {

    switch (action.type) {
        case GET_SINGLE_ARTICLE:
            return {
                ...stateSlug,
                slug: action.slug
            };
        case GET_SINGLE_ARTICLE_SUCCESS:
            return  {
                ...stateSlug,
                receiveArticleSingle:action.receiveArticleSingle
            };
        case  GET_SINGLE_ARTICLE_FAILURE:
            return [];
        default:
            return stateSlug;

    }
};
export const Slug = (state) => state;
//
// export {
//     SingleArticleReducer,
//     Slug
// }
