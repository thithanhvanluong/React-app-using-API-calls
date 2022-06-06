const initState = {
    users: [
        { id: 1, name: 'chubby hedgehog' },
        { id: 2, name: 'Van Luong' }
    ]
}
//this is the state of REDUX, NOT OF REACT
//state: the place of saving data of Redux
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)

            return {
                ...state, users
            }

        case 'CREATE_USER':
            //create a random user
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }

            //users: [...state.users, user]: push new user in the existing array
            return {
                ...state, users: [...state.users, user]
            }





        default:
            return state;

    }



}
export default rootReducer;