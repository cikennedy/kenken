import React, { useState, useEffect }from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';

import Pagination from '../Pagination';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();

    // once we clear the form, it changes the currentId
    // the app will dispatch the getPosts action
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          align-items="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6} >
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
