import React, { Component } from 'react';

class MyName extends Component{
    static defaultProps ={
        name: "default name"
      }
    render() {
        return(
            <div>
                안녕하세요! 제 이름은 <b> {this.props.name} </b> 입니다!
            </div>
        );
    }
}

export default MyName;