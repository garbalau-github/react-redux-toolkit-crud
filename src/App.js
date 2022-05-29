import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, deleteUser } from './features/Users';

const App = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');

  return (
    <div className='App'>
      <div className='addUser'>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Name'
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          type='text'
          placeholder='Username'
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList.length + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div className='User'>
              <h2>{user.name}</h2>
              <h3>Username: {user.username}</h3>
              <p>id. {user.id}</p>
              <div className='UserControls'>
                <input
                  onChange={(e) => {
                    setNewUsername(e.target.value);
                  }}
                  type='text'
                  placeholder='New username'
                />
                <button
                  onClick={() => {
                    if (newUsername.length > 3) {
                      dispatch(
                        updateUser({
                          id: user.id,
                          newUsername,
                        })
                      );
                      setNewUsername('');
                    } else {
                      alert('Add more characters, please!');
                    }
                  }}
                >
                  Update Username
                </button>
                <button
                  onClick={() => {
                    dispatch(
                      deleteUser({
                        id: user.id,
                      })
                    );
                  }}
                >
                  Delete User
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
