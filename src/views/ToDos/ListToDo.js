import React from 'react';
import AddToDo from './AddToDo';
import './ListToDo.scss'
import { toast } from 'react-toastify';
import Color from '../HOC/Color'

class ListToDo extends React.Component {

    state = {
        listTodos: [
            { id: "todo1", title: 'Doing homework' },
            { id: "todo2", title: 'Making video' },
            { id: "todo3", title: 'Fixing bugs' }
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        //cap nhat lai listTodo bang cach day (push) them todo moi
        let currentListTodo = this.state.listTodos;
        currentListTodo.push(todo);
        this.setState({
            listTodos: currentListTodo
        })

        //or:
        /*this.setState({
            listTodos: [...this.state.listTodos, todo],
        })*/

        toast.success("Wow so easy!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos //the latest array 
        })
        toast.success('Delete Succeed!');
    }
    //when click Edit button
    handleEditTodo = (todo) => {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));


            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {} //to let the text inside button change from Save --> Edit

            })
            toast.success('Update Todo Succeed!');
            return;

        }
        //edit
        this.setState({
            editTodo: todo

        })




    }

    handleOnChangeEditTodo = (event) => {

        let editTodoCopy = this.state.editTodo;
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy

        })

    }
    render() {
        let { listTodos, editTodo } = this.state; //<-> let listTodos = this.state.listTodos;
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log('>>>check empty object', isEmptyObj)
        //<-> if length = 0, isEmptyObj = true
        // if length != 0, isEmptyObj = false
        return (
            <>
                <p>
                    Simple TODO Apps With React.js and Nhim beo
                </p>
                <div className="list-todo-container">
                    <AddToDo
                        addNewTodo={this.addNewTodo}
                    />

                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 &&

                            listTodos.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}>
                                        {isEmptyObj === true ?
                                            //normal mode
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            //edit mode
                                            //&&: if (editTodo.id === item.id)--> print <span>
                                            //https://thaycacac.github.io/2021-05-04-20-tips-rut-ngan-code-javascript/
                                            <>

                                                {editTodo.id === item.id ?
                                                    < span >
                                                        {index + 1} - <input value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>

                                                }
                                            </>
                                        }
                                        <button className='edit'
                                            onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className='delete'
                                            onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>


                                )

                            })
                        }


                    </div>


                </div >
            </>
        )

    }

}
export default ListToDo;