import React , {useState,useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'

import {getPosts} from'./actions/posts'
import Posts from './Components/Posts/Posts'
import Form from './Components/Form/Form'
import useStyles from './styles'


const App = ()=>{
    const[currentId,setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getPosts())
    },[currentId,dispatch])


    return(
        <Container maxwidth = "lg">
            <AppBar className = {classes.AppBar} position = "static" color = "inherit">
                <Typography className = {classes.heading} variant = "h2" align = "center">Tour Services</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-between" alignItems = "stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId= {currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App