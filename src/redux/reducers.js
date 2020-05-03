/*   
DATA STORE STRUCTURE


{
    todo:[
        {
            todo:'OUR TASK',
            maybe someother data
        },
    ]
}



*/

initialState = {
  todo: [],
};

export const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDTODO':
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            todo: action.todo,
            status: action.status,
            day: action.day,
          },
        ],
      };

    case 'TOGSTATUS':
      console.log(action.index, action.status, 'REDUCER');

      return {
        ...state,
        ...state.todo.splice(action.index, 1, {
          ...state.todo[action.index],
          status: action.status,
        }),
        todo: [...state.todo],
      };

    case 'REMOVETODO':
      return {
        ...state,
        ...state.todo.splice(action.index, 1),
        todo: [...state.todo],
      };

    default:
      return state;
  }
};
