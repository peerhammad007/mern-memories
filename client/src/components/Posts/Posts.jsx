import React, {useEffect} from 'react';
import Post from './Post/Post.jsx';
import useStyles from './Styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import { getPosts } from '../../actions/posts.js';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const dispatch = useDispatch();

    dispatch(getPosts());
    useEffect(() => {
        dispatch(getPosts());
        console.log("Posts state updated:", posts);
    }, [])
    

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => ( 
                    post ? (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ) : <p>not availabe</p>
                ))}
            </Grid>
        )
    )
}

export default Posts;
