// // import React from 'react'
// // import { useState } from 'react'
// // import axios from 'axios'
// // const ToDoList = () => {
// //   const [todo, setTodo] = useState('')  //guru
// //   const [todoArray, setTodoArray] = useState([])


// //   const addtodo = () => {
// //     const newtodoObj = {
// //       title: todo, //guru
// //       complted: false
// //     }
// //     axios.post(' http://localhost:3001/posts', newtodoObj)
// //       .then(() => {
// //         alert('data posted')
// //       })
// //       .catch(() => {
// //         alert('data not posted')
// //       })
// //   }

// //   return (
// //     <div>
// //       <label htmlFor="Todo">Todo : </label>
// //       <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} /> <br />

// //       <button onClick={addtodo}>Add Todo</button>
// //       {/* guru */}
// //     </div>
// //   )
// // }

// // export default ToDoList

// import React, { useState } from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// const ToDoList = () => {

//   const [todo, setTodo] = useState('')
//   const [todoArray, setTodoArray] = useState([])

//   const addTodo = function () {
//     const newTodoObj = {
//       title: todo,
//       completed: false
//     }
//     axios.post('  http://localhost:3001/posts', newTodoObj)
//       .then(() => {
//         alert('data posted')
//       })
//       .catch(() => {
//         alert('not posted')
//       })
//   }

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <div>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField id="outlined-basic" label="Todo" variant="outlined" value={todo} onChange={(e) => setTodo(e.target.value)} />
//         </Box>
//         <Button variant="outlined" onClick={addTodo}>Add Todo</Button>

//       </div>

//     </div>
//   )
// }

// export default ToDoList

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import axios from 'axios';

// const ToDoList = () => {
//   const [todoTitle, setTodoTitle] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [todoArray, setTodoArray] = useState([]);

//   const getTodo = () => {
//     axios
//       .get('http://localhost:3001/posts')
//       .then((response) => {
//         setTodoArray(response.data);
//       })
//       .catch(() => {
//         alert('Cannot display todos.');
//       });
//   };

//   const addTodo = function () {
//     const newTodoObj = {
//       title: todoTitle,
//       imageUrl: imageUrl,
//       completed: false,
//     };

//     axios
//       .post('http://localhost:3001/posts', newTodoObj)
//       .then(() => {
//         getTodo();
//         setTodoTitle('');
//         setImageUrl('');
//       })
//       .catch(() => {
//         alert('Todo not posted.');
//       });
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
//       <div>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField id="outlined-basic" label="Todo Title" variant="outlined" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
//           <TextField id="outlined-basic" label="Image URL" variant="outlined" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
//         </Box>
//         <Button variant="outlined" onClick={addTodo}>
//           Add Todo
//         </Button>
//       </div>
//       <div>
//         <ol>
//           {todoArray.map((todoItem) => (
//             <li key={todoItem.id}>
//               <div>
//                 <p>{todoItem.title}</p>
//                 {todoItem.imageUrl && <img src={todoItem.imageUrl} alt="Todo" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default ToDoList;


import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
  
    axios.get('http://localhost:3000/posts')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  };

  const addTodo = () => {
    const newTodoObj = {
      title: newTodo,
      completed: false,
    };

    axios.post('http://localhost:3000/posts', newTodoObj)
      .then(() => {
        fetchTodos(); 
        setNewTodo('');
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        fetchTodos();
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };

  const updateTodo = (id, updatedData) => {
   
    axios.put(`http://localhost:3000/posts/${id}`, updatedData)
      .then(() => {
        fetchTodos();
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
      });
  };

  return (
    <div>
      <Box p={3}>
        <h1>To-Do List</h1>
        <TextField
          label="New Todo"
          variant="outlined"
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          disabled={!newTodo}
        >
          Add Todo
        </Button>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.title} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => {
                    const updatedTitle = prompt('Edit Todo:', todo.title);
                    if (updatedTitle !== null) {
                      const updatedData = { title: updatedTitle };
                      updateTodo(todo.id, updatedData);
                    }
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default ToDoList;