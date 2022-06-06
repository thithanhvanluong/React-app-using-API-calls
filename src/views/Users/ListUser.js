import React from 'react';
import axios from 'axios';
import './ListUser.scss';
import { withRouter } from 'react-router-dom'


class ListUser extends React.Component {

    state = {
        listUsers: []
    }

    //Phương thức componentDidMount() cũng có thể là nơi để bạn sử dụng AJAX lấy dữ liệu từ Server, 
    //sau đó gọi setState() để thay đổi trạng thái của Component, 
    //nếu thành công Component sẽ được render thêm 1 lần nữa.
    async componentDidMount() {


        let res = await axios.get("https://reqres.in/api/users?page=1")
        //setState() function forces React to run render() again =>call API in componentDidMount()
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })

    }

    handleViewDetailUser = (user) => {
        //redirect to /user/:id page
        //push one new entry to history stack.
        this.props.history.push(`/user/${user.id}`)

    }
    render() {
        let { listUsers } = this.state;
        return (
            <div className='list-user-container'>
                <div className='title'>
                    FETCH ALL LIST USERS
                </div>
                <div className='list-user-content'>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className='child' key={item.id}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })

                    }
                </div>
            </div>

        )
    }
}
export default withRouter(ListUser);