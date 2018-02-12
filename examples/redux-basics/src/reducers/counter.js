export default (state={}, action) => {
    switch(action.type){
        case 'INC':
            state.counter += 1;    
            break;
        case 'DEC':
            state.counter -= 1;    
            break;
    }
};