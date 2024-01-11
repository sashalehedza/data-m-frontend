import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addUser,
  deleteUser,
  updateUser,
  selectUsers,
} from '../redux/userSlice'
import UserTable from './UserTable'

const ManipulateUsers = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)

  const [editUserId, setEditUserId] = useState(null)
  const [editedUser, setEditedUser] = useState({
    name: '',
    lastname: '',
    age: 0,
    sex: '',
    role: '',
  })

  const handleAddUser = () => {
    const newUser = { id: users.length + 1, ...editedUser }
    dispatch(addUser(newUser))
    setEditedUser({
      name: '',
      lastname: '',
      age: 0,
      sex: '',
      role: '',
    })
  }

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId))
  }

  const handleUpdateUser = (userId) => {
    setEditUserId(userId)
    const userToEdit = users.find((user) => user.id === userId)
    setEditedUser(userToEdit)
  }

  const handleSaveUpdate = () => {
    dispatch(updateUser({ id: editUserId, updatedUser: editedUser }))
    setEditUserId(null)
    setEditedUser({
      name: '',
      lastname: '',
      age: 0,
      sex: '',
      role: '',
    })
  }

  return (
    <div>
      <h1>User Management (Manipulate Users)</h1>
      <UserTable
        users={users}
        onDelete={handleDeleteUser}
        onUpdate={handleUpdateUser}
      />
      {editUserId !== null && (
        <div>
          <input
            type='text'
            placeholder='Name'
            value={editedUser.name}
            onChange={(e) =>
              setEditedUser({ ...editedUser, name: e.target.value })
            }
          />
          <input
            type='text'
            placeholder='Lastname'
            value={editedUser.lastname}
            onChange={(e) =>
              setEditedUser({ ...editedUser, lastname: e.target.value })
            }
          />
          <input
            type='number'
            placeholder='Age'
            value={editedUser.age}
            onChange={(e) =>
              setEditedUser({
                ...editedUser,
                age: parseInt(e.target.value, 10) || 0,
              })
            }
          />
          <select
            value={editedUser.sex}
            onChange={(e) =>
              setEditedUser({ ...editedUser, sex: e.target.value })
            }
          >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
          <select
            value={editedUser.role}
            onChange={(e) =>
              setEditedUser({ ...editedUser, role: e.target.value })
            }
          >
            <option value='Admin'>Admin</option>
            <option value='User'>User</option>
          </select>
          <button onClick={handleSaveUpdate}>Save</button>
        </div>
      )}
      <button className='add' onClick={handleAddUser}>
        Add User
      </button>
    </div>
  )
}

export default ManipulateUsers
