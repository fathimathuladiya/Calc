const displaydata=(data)=>{
    output.value+=data
}

const removeall=()=>{
    output.value=""
    output.placeholder="0"
}

const backspace=()=>{
    
   // output.value=Math.floor(output.value/10)
   output.value=output.value.slice(0,-1)
}

const showresult=()=>{
    try{
        console.log("Inside try block");
        output.value=eval(output.value)
    }
    catch(err){
        console.log("Inside catch block");
        output.placeholder="Invalid Expression"
        output.value=""
    }
    finally{
        console.log("Inside finally");
        
    }
}