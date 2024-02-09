import * as api from '../api';

//Action creator
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        const action = { type: 'FETCH_ALL', payload: data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = api.createPost(post);
        const action = { type: 'CREATE', payload: data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}