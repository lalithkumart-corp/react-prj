var myDefaultState = {
    comments: ['Nan nallavan...']
}
export default (state=myDefaultState, action) => {
    var newState;    
    switch(action.type){
        case 'ADD_COMMENT':        
            newState = {
                ...state,
                comments: [...state.comments, action.text]
            };
            break;
        default:
            newState = state;            
    }
    return newState;
}