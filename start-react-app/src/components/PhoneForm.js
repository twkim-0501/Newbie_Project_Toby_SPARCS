import React, {Component} from 'react';

class PhoneForm extends Component {
    state={
        name: '',
        phone: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(); //prevent page reloading
        this.props.onCreate(this.state); //state를 onCreate를 통해 부모에게 전달
        this.setState({//상태 초기화
            name:'',
            phone:''
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="전번"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default PhoneForm;