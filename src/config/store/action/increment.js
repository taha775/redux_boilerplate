const add_inc =()=>{
    return(dispatch)=>{
        dispatch({
            type:"inc"     /// meri galti  thi ma space da rh tha agr space we gave its count sappce as a a string also 

        })
    }
}

const dec =()=>{
    return(dispatch)=>{
        dispatch({
            type:"dec"
        })
    }
}
export {add_inc,dec}