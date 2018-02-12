var defaultState = {
    tasks:['Go to School']
};
export default function todoReducer(state=defaultState, action){
    var newState;
    switch(action.type){
        case 'ADD_TODO':
        newState = {
                ...state,
                tasks : [...state.tasks, action.todo ]
            }
            break;
        default:
            newState = state;
    }
    return newState;
}


// export default function todoReducer(state=0, action){
//     switch(action.type){
//         case 'INCREAMENT':
//             return state = state +1            
//             break;            
//     }
//     return state;
// }