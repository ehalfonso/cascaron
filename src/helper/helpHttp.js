import React from 'react'

const helpHttp = () => {
    const get=(endpoint)=>{
        return fetch(endpoint).then(response=>
            response.ok
            ?console.log(response.json())
            :Promise.reject()
            )
    }
    const post=()=>{}
    const put=()=>{}
    const del=()=>{}
  return {
    get,post,put,del
  }
}

export default helpHttp