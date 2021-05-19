const listReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            if(action.payload !== '') return [...state, action.payload]
            return state;
        case 'DELETE_TASK':
            if(action.payload !== ''){
                let temp = state.filter(item => item.id !== action.payload)
                return temp
            }
            return state;
        default:
            return state
    }
}

export default listReducer;