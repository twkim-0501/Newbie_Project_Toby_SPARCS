import React, {Component} from "react"
import axios from "axios";
import ClosetTemplate from './ClosetTemplate';
import ClosetForm from './ClosetForm';
import ClothList from './ClothList';
class Closet extends Component {
    id = 2
    state = {
        input: '',
        clothes:  []
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value //인풋 change value
        });
    }

    handleCreate =() => {
        const { input, clothes } = this.state;
        this.setState({
            input: '', // 초기 input은 빈 string
            clothes: clothes.concat({ //concat으로 배열 추가
                /*push로 넣으면 나중에 리렌더링 방지 못함!(비교불가)*/
                id: this.id++, //추가할 때마다 id 1씩 증가
                text: input, 
                wished: false
            })
        });
    }
    handleDelete = (id) => {
        const {clothes} = this.state;
        this.setState({
            clothes: clothes.filter(cloth => (cloth.id!==id))
        });
    }
    handleToggle = (id) => {
        const {clothes} = this.state;
        const del_cloth = clothes[clothes.findIndex(cloth => cloth.id === id)];//삭제할 옷
        const temp = [...clothes];
        temp[clothes.findIndex(cloth => cloth.id === id)] = { //wished값 변경
            ...del_cloth, wished: !(del_cloth.wished)
        };
        this.setState({
            clothes: temp
        });
    }
    render(){
        const { cloth_category } = this.props;
        //옷 목록 조회 요청 전송
        axios.get(`/api/closet/${this.props.cloth_category}`)
        .then(response => {
            this.setState({clothes: [...response]})
        });



        return (
            //<div>This is Closet page.</div>
            <ClosetTemplate cloth_category={cloth_category} form={<ClosetForm value={this.state.input} onChange={this.handleChange} onCreate={this.handleCreate}/>}>
                <ClothList clothes={this.state.clothes} onDelete={this.handleDelete} onToggle={this.handleToggle}/>
            </ClosetTemplate>
        );
    }
}
export default Closet;