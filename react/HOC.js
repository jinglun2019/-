import React,{Component} from 'react'

function Kaikeba(props){
    return <div>{props.stage}-{props.name}</div>
}

const withKaikeba = Comp =>{
    //获取name
    const name = '高阶组件'
    return class extends React.Component {
        componentDidMount(){
            console.log("do something");
        }
        render(){
            return <Comp {...this.props} name={name}></Comp>
        }
    }
}
const NewComp = withKaikeba(Kaikeba)

const withLog = Comp =>{
    console.log(Comp.name+"被渲染了");
    return props => <Comp {...props}></Comp>

}
const LogComp = withLog(NewComp);

export default class Hoc extends Component{
    render() {
        return (
            <div>
                <LogComp stage="React"></LogComp>
            </div>
        )
    }
}