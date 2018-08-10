
import React,{Component} from 'react'


export default class Item extends Component{
constructor(props){
super()
}
render(props){

return(

    <div className="acheivement-item">
    <img className="acheivement-item-img" src={this.props.icon } />
    <h4 className="acheivement-item-title">
      {this.props.number}
      </h4>
    <p className="acheivement-item-desc">{this.props.txt} </p>

  </div>

);

}


}