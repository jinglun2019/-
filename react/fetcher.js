import React from 'react'

export default function(){
    const footer=<button>b</button>;
   
    return( <Fetcher name="getUser" >
        {({name,age})=>(
            <div>
            <p>{name}-{age}</p>
            <footer></footer>
           </div> 
        )}
    </Fetcher>)
}
function Fetcher(props){
    const user=API[props.name]();
    return props.children(user)
}
const API = {
    getUser() {
        return {name:'jerry',age:20};
    }
};