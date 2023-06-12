// when app store satrt whats the stae first

// db sa data >>> statemanagement ajayega 
const Initial_State ={
    count : 0 ,
    user:"email"
}

export default (state = Initial_State, action)=>{
    switch(action.type){
        case "inc":
            return { ...state, count: state.count + 1 };
      
            case "dec":
              return { ...state, count: state.count - 1 };
            
          default:
            return state;
    }

}