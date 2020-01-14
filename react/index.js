import React from "react";
import ReactDOM from "react-dom";
import AntdTest from './antdTest'
import Hoc from './HOC'
import Hoc2 from './HOC2'
import Fetcher from './fetcher'
import Filter from './filter.js'
import Context from './context'
function IsBoil(props){
  if(props.temperature>=100){
    return <p>water is boil</p>
  } else {
    return <p>water is not boil</p>
  }
}
class Box extends React.Component{
  constructor(props){
    super(props);
	  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
       this.props.onSwitch(e.target.value);
  }
  render(){

	  return (
         <fieldset>
			<legend>Mode:{this.props.mode}  please type some value</legend>
			<input value = {this.props.tval} onChange={this.handleChange}  / >
			 
		</fieldset>
	  )
  }
}

 class Alla extends React.Component{
	 constructor(props){
	   super(props);
	   this.state = {mode:"C",tval:"0"};
	   this.handleCelsius = this.handleCelsius.bind(this);
	   this.handleFahrenheit = this.handleFahrenheit.bind(this);
	 }
	  handleCelsius(tval1) {
	     this.setState({mode: 'C', tval:tval1});
	 }
	 
	  handleFahrenheit (tval1) {
	     this.setState({mode: 'F', tval:tval1});
	 }
	 
	 render(){
		 let mode = this.state.mode;
		 let c =  mode ==="C"  ? this.state.tval:  (this.state.tval-32)/1.8;
		 let f = mode ==="C" ? 32+this.state.tval*1.8 : this.state.tval;
        return (
           <div>
		      <Box mode="C" tval={c} onSwitch={this.handleCelsius}/>
		      <Box mode="F" tval={f} onSwitch={this.handleFahrenheit}/>
            <IsBoil temperature={c}/>

   				<hr/>
				<AntdTest></AntdTest>
				<hr/>
				<Hoc></Hoc>
				<hr></hr>
				<Hoc2></Hoc2>
				<hr></hr>
				<WelcomeDialog></WelcomeDialog>

				<hr></hr>
				<Fetcher></Fetcher>

				<hr></hr>
				<Filter></Filter>

				<hr></hr>
				<Context></Context>
           </div>
	     );
    }
 }



 function Dialog(props){
	 
	  return <div style={{border:`2px solid ${props.color}`}}>{props.children}
	  <div>test</div>
 <div>{props.name}</div>
	  </div>
 }
 function WelcomeDialog(props){
	 return <Dialog {...props} color="green" name="SCOUNT"><div>ACE</div></Dialog>
 }
ReactDOM.render(<Alla/>,document.getElementById('root'));

        
        
        
        