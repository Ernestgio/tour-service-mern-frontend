import axios from 'axios'
//actions creators

const homeUrl = '/services'
const postUrl = '/services/new'

export const getPosts = ()=>async(dispatch)=>{ 
    axios.get(homeUrl).then((response)=>{dispatch({type:'FETCH_ALL',payload:response.data})
    }).catch((err)=>{
        console.log(err)
    })
}

export const createPost = (newpost)=> async(dispatch) =>{
    axios.post(postUrl,newpost).then((response)=>{
        dispatch({type:'CREATE',payload:response.data})
    }).catch((err)=>{
        console.log(err)
    })
}

export const updatePost = (id,updatedpost)=> async(dispatch)=>{
    axios.put(`${homeUrl}/${id}`,updatedpost).then((response)=>{
        dispatch({type:'UPDATE', payload:response.data})
    }).catch((err)=>{
        console.log(err)        
    })

}

export const deletePost = (id)=>async(dispatch)=>{
    axios.delete(`${homeUrl}/${id}`).then((response)=>{
        dispatch({type:'DELETE',payload:id})
    }).catch((err)=>{console.log(err)})
}