export const addTodo = (todo, status, day) => ({
  type: 'ADDTODO',
  todo,
  status,
  day,
});
export const togStatus = (index, status) => ({
  type: 'TOGSTATUS',
  index,
  status,
});

export const removeTodo = (index) => ({
  type: 'REMOVETODO',
  index,
});
