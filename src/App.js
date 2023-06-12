  import React from "react";
  import { connect } from "react-redux";
import { add_inc } from "./config/store/action/increment";




  function App (props){
    console.log(props)
    return(
      <>
      <h1>
        store value :{props.count}
        
        
      </h1>
      <button onClick={()=>props.inc()}> click </button>

      </>
    )
  }

const mapStateToProps=(state)=>({
  count:state.count,
  email:state.user
})


  const mapdispatchtoprops =(dispatch)=>({
    inc:()=>dispatch(add_inc())
  })
  // export default App   x isko nhi lagenge 
  // but

  export default connect(mapStateToProps,mapdispatchtoprops)(App)