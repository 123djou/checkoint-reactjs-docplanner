import React,{Component} from 'react'

export default class Grid extends Component{

constructor(props){
    super()
}
render(props){
return(
    <div className={this.props.className}>
    <h6 className="category">{this.props.for} </h6><br />
    <h3 className="pane-title">{this.props.find}</h3>
    <div className="row">
    
    {this.props.list }

      <img className="row-img" src={this.props.img} />

    </div>
  </div>


);

}

}