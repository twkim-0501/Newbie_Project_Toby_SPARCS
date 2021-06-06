import React, {Component} from "react";
import axios from "axios";
import ClosetTemplate from './ClosetTemplate';
import ClosetForm from './ClosetForm';
import ClothList from './ClothList';
class Closet extends Component {
    state = {
        input: '',
        clothes:  []
    }
    componentDidMount() {
        //옷 목록 조회 요청 전송
        axios.get(`/api/closet/${this.props.cloth_category}`)
        .then(response => {
            //console.log(response);
            this.setState({clothes: [...response.data]})
        });
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value //인풋 change value
        });
    }

    handleCreate =() => {
        const { input } = this.state;
        axios.post(`/api/closet/${this.props.cloth_category}`, {
            text: input,
            wished: false
        })
        .then(() => axios.get(`/api/closet/${this.props.cloth_category}`))
        .then(response => {
            this.setState({
                input: '',
                clothes: [...response.data]
            }) 
        });
        /*
        this.setState({
            input: '', // 초기 input은 빈 string
            clothes: clothes.concat({ //concat으로 배열 추가
                //push로 넣으면 나중에 리렌더링 방지 못함!(비교불가)
                id: this.id++, //추가할 때마다 id 1씩 증가
                text: input, 
                wished: false
            })
        });
        */
    }
    handleDelete = (id) => {
        axios.post(`/api/closet/delete/${this.props.cloth_category}`, {_id:id})
        .then(() => axios.get(`/api/closet/${this.props.cloth_category}`))
        .then(response => {
            this.setState({clothes: [...response.data]})
        });
    }
    handleToggle = (id) => {
        axios.post(`/api/closet/toggle/${this.props.cloth_category}`, {_id:id})
        .then(() => axios.get(`/api/closet/${this.props.cloth_category}`))
        .then(response => {
            this.setState({clothes: [...response.data]})
        });
    }
    render(){
        const { cloth_category } = this.props;


        return (
            //<div>This is Closet page.</div>
            <ClosetTemplate 
            cloth_category={cloth_category} 
            form={<ClosetForm value={this.state.input} 
            onChange={this.handleChange} onCreate={this.handleCreate}/>}>
                <ClothList clothes={this.state.clothes} onDelete={this.handleDelete} onToggle={this.handleToggle}/>
            </ClosetTemplate>
        );
    }
}
export default Closet;