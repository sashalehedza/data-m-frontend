// UserTable.js
import React from 'react'
import { Link } from 'react-router-dom'

const UserTable = ({ users, onDelete, onUpdate }) => {
  return (
    <div className='user-table-container'>
      <table className='user-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Role</th>
            {onDelete && onUpdate && <th>Actions</th>}
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.age}</td>
              <td>{user.sex}</td>
              <td>{user.role}</td>
              {onDelete && onUpdate && (
                <td>
                  <button className='delete' onClick={() => onDelete(user.id)}>
                    Delete
                  </button>
                  <span className='button-spacing'></span>
                  <button className='update' onClick={() => onUpdate(user.id)}>
                    Update
                  </button>
                </td>
              )}
              <td>
                <Link to={`/user/${user.id}`}>
                  <button className='view'>View</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
