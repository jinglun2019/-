import React,{Component} from 'react'
const withKaikeba = Comp =>{
    //获取name
    const name = '高阶组件'
    return class extends React.Component {
        componentDidMount(){
            console.log("do something2");
        }
        render(){
            return <Comp {...this.props} name={name}></Comp>
        }
    }
}

const withLog = Comp =>{
    console.log("被渲染了!?2");
    return props => <Comp {...props}></Comp>
}
@withLog
@withKaikeba
@withLog
class  Kaikeba extends React.Component{
    render(){
      return <div>{this.props.stage}-{this.props.name}</div>
    }
}
export default class Hoc2 extends Component{
    render() {
        return (
            <div>
                <Kaikeba stage="React"></Kaikeba>
            </div>
        )
    }
}