export const loadState=(storage)=>{
    try{
        let serializedState;
        if(storage === "local"){
          serializedState = localStorage.getItem("state");
        }
        else if(storage === "session"){
           serializedState = sessionStorage.getItem("state");
        }
        
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined
    }
}

export const saveState = (state, storage) => {
    
    try{
        const serializedState = JSON. stringify(state);
        if(storage==="local"){
           localStorage.setItem("state", serializedState);
        }
        else if(storage === "session"){
            sessionStorage.setItem("state", serializedState)
        }
        
    }
    catch(err){
        console.log(err);
    }
}
