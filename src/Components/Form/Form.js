import React, { useState, useEffect } from 'react'
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import {createPost, updatePost} from '../../actions/posts'
import {useSelector} from 'react-redux'

const Form = ({currentId,setCurrentId})=>{
    const [postData,setPostData] = useState({
        name: '', price: '', unit: '',serviceType : '', description: '', vendorContact: '', picturePath: ''
    })
    const post = useSelector((state)=>currentId ? state.posts.find((p)=>p._id===currentId):null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(post) setPostData(post);
    },[post])

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(currentId){
            dispatch(updatePost(currentId,postData))
        }
        else{
            dispatch(createPost(postData))
        }
        clear()
    }

    const clear =()=>{
        setCurrentId(null)
        setPostData({ name: '', price: '', unit: '',serviceType : '', description: '', vendorContact: '', picturePath: ''});
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete ="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant ="h6">{currentId ?'Editing':'Create new'} Tour Service</Typography>
                <TextField name = "name" variant = "outlined" label="name" fullWidth value = {postData.name} onChange={(e)=> setPostData({...postData,name:e.target.value})} />
                <TextField name = "price" variant = "outlined" label="price" fullWidth value = {postData.price} onChange={(e)=> setPostData({...postData,price:e.target.value})} />
                <TextField name = "unit" variant = "outlined" label="unit" fullWidth value = {postData.unit} onChange={(e)=> setPostData({...postData,unit:e.target.value})} />
                <TextField name = "serviceType" variant = "outlined" label="serviceType" fullWidth value = {postData.serviceType} onChange={(e)=> setPostData({...postData,serviceType:e.target.value})} />
                <TextField name = "description" variant = "outlined" label="description" fullWidth value = {postData.description} onChange={(e)=> setPostData({...postData,description:e.target.value})} />
                <TextField name = "vendorContact" variant = "outlined" label="vendorContact" fullWidth value = {postData.vendorContact} onChange={(e)=> setPostData({...postData,vendorContact:e.target.value})} />
                <TextField name = "picturePath" variant = "outlined" label="picturePath" fullWidth value = {postData.picturePath} onChange={(e)=> setPostData({...postData,picturePath:e.target.value})} />
                <Button className ={classes.buttonSubmit} variant ="contained" color ="primary" size ="large" type = "submit" fullWidth>Submit</Button>
                <Button variant ="contained" color="secondary" size="small" onClick={clear}>Clear</Button>
            </form>
        </Paper>
    )
    
}

export default Form
