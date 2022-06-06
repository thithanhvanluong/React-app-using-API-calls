import React from 'react';
import { withRouter } from "react-router";
import Color from '../HOC/Color';
import food from '../../assets/images/food.jpg';
import { connect } from 'react-redux'
class Home extends React.Component {

    componentDidMount() {
        //after 3 seconds, HOme page will be routed to Todo page
        //withRouter allows this syntax work: this.props.history.push (HOC: High-order component)
        /*setTimeout(() => {
            this.props.history.push('/todo')

        }, 3000)*/

    }
    handleCreateUser = () => {
        this.props.addUserRedux();

    }
    handleDeleteUser = (user) => {
        console.log("Check user delete: ", user)
        this.props.deleteUserRedux(user);
    }
    render() {
        console.log(">>>> check props Redux: ", this.props.dataRedux)
        //dataRedux dc truyen qua props (React) thong qua Redux

        let listUsers = this.props.dataRedux;
        return (
            <>

                <div>
                    Hello World From Homepage With SaskPolytech Student
                </div>

                <div><img src={food} style={{ width: '400px', height: "200px", marginTop: "20px" }} /></div>

                { /* <div>
                    {listUsers && listUsers.length > 0 &&

                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>

                                </div>
                            )
                        })
                    }

                     <button onClick={() => this.handleCreateUser()}>Add new</button>

                </div>*/}
            </>

        )
    }

}

//export default withRouter(Home);


//Mapping State (Redux) to Props (React)
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users //return an Object
        //->đối tượng trả về sẽ hợp nhất với props của component:
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        //dispatch plain actions
        deleteUserRedux: (userDelete) => dispatch({ type: "DELETE_USER", payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),

    }
}


//connect create a link between React and Redux JUST IN component HOME
//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]) — 
//<->Creates a higher-order component for making container components out of base React components
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));