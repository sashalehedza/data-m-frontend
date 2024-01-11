// Analytics.js
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../redux/userSlice'

const Analytics = () => {
  const users = useSelector(selectUsers)

  const calculateAverageAge = (users) => {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0)
    return users.length > 0 ? totalAge / users.length : 0
  }

  const filterUsersBySex = (users, sex) => {
    return users.filter((user) => user.sex === sex)
  }

  const averageAgeBySex = (users, sex) => {
    const filteredUsers = filterUsersBySex(users, sex)
    return calculateAverageAge(filteredUsers)
  }

  const countUsersByRole = (users, role) => {
    return users.filter((user) => user.role === role).length
  }

  const averageAge = calculateAverageAge(users)
  const averageMaleAge = averageAgeBySex(users, 'Male')
  const averageFemaleAge = averageAgeBySex(users, 'Female')
  const numberOfUsers = users.length
  const numberOfAdmins = countUsersByRole(users, 'Admin')

  return (
    <div>
      <h1>Analytics</h1>
      <p>Average Age of All Users: {averageAge.toFixed(2)}</p>
      <p>Average Age of Male Users: {averageMaleAge.toFixed(2)}</p>
      <p>Average Age of Female Users: {averageFemaleAge.toFixed(2)}</p>
      <p>Total Number of Users: {numberOfUsers}</p>
      <p>Number of Admins: {numberOfAdmins}</p>
    </div>
  )
}

export default Analytics
