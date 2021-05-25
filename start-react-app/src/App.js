import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김 태 우',
        phone: '010-4742-2687'
      },
      {
        id: 1,
        name: '김 태 양',
        phone: '010-7613-2687'
      }
    ]
  }
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data})
    })
  }
  render() {
    const {information} = this.state;
    return (
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;
