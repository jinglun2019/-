import React,{useContext} from 'react'
//隔代传参
const MyContext = React.createContext();

function Child(prop){
    return (
        <div>
            Child :  {prop.foo}
        </div>
    )
}

function Child2(){
    const ctx = useContext(MyContext);
    return <div>Child2:{ctx.foo}</div>
}

//法二
//const {Provider} = MyContext;
//<Provider></Provide>
const {Consumer} = MyContext;
export default function ContextTest(){
    return (
        <div>
            <MyContext.Provider value={{foo:'bar'}}>
              <Consumer>
                  {value=><Child {...value}/>}
              </Consumer>

              <Child2></Child2>
              <Child3></Child3>
            </MyContext.Provider>
        </div>
    )
}


class Child3 extends React.Component{
    static contextType = MyContext;
    render() {
        return <div>Child3:{this.context.foo}</div>
    }
}