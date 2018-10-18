import React from 'react';
import '../../css/panel.css';
import PropTypes from 'prop-types';
//import Button from '@material-ui/core/Button';

class Panel extends React.Component{
 
    render(){

        const style={
            img:{
                width:100,
                height:100,
               
            }


        }
        return(
            <div className='Panel'>
            <img src={this.props.img} style={style.img}/>
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
                </div>

        )
    }
}    
    

       Panel.PropTypes={
       img:PropTypes.string,
       title:PropTypes.string,
       content:PropTypes.string

    

}



export default Panel;