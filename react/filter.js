import React from 'react'

export default function(){
    return (
        <div>
        
                <Filter type="p">
                    <p>good</p>
                    <div>bad</div>
                </Filter>
        
        </div>
    )
}

function Filter({type,children}){
    return (
        <div>
            {React.Children.map(children,child=>{
                if(child.type !== type) {
                    return; 
                }
                return child;
            })}
            <div>2333</div>
            <RadioGroup name="fruit">
                <Radio value="vue">vue</Radio>
                <Radio value="react">react</Radio>
            </RadioGroup>
        </div>
    )
}

function RadioGroup(props){
    return (<div>
        {React.Children.map(props.children,child =>{
           return React.cloneElement(child,{name:props.name})
        })}
        <div>radiogroup-test</div>
    </div>)
}
function Radio({children,...rest}){
    return (
        <label >
            <input type="radio" {...rest}/>
            {children}
        </label>
    )
}