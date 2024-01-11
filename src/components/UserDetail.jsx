// UserDetail.js
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectUsers } from '../redux/userSlice'

const UserDetail = () => {
  const { userId } = useParams()
  const users = useSelector(selectUsers)
  const user = users.find((user) => user.id === parseInt(userId))

  if (!user) {
    return <div>User not found</div>
  }

  return (
    <div>
      <h1>User Detail</h1>
      <p>Name: {user.name}</p>
      <p>Lastname: {user.lastname}</p>
      <p>Age: {user.age}</p>
      <p>Sex: {user.sex}</p>
      <p>Role: {user.role}</p>
      <h2>Experiences</h2>
      {user.experiences.map((experience) => (
        <div key={experience.id}>
          <p>
            <strong>Position:</strong> {experience.position}
          </p>
          <p>
            <strong>Role:</strong> {experience.role}
          </p>
          <p>
            <strong>Start Date:</strong> {experience.startDate}
          </p>
          <p>
            <strong>End Date:</strong> {experience.endDate}
          </p>
        </div>
      ))}
    </div>
  )
}

export default UserDetail
