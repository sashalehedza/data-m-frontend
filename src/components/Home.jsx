import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../redux/userSlice'
import UserTable from './UserTable'

const Home = () => {
  const users = useSelector(selectUsers)

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSex, setSelectedSex] = useState('')
  const [sortOrder, setSortOrder] = useState('asc') // 'asc' or 'desc'

  const filteredUsers = users
    .filter(
      (user) =>
        (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.lastname.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedSex === '' || user.sex === selectedSex)
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.age - b.age
      } else {
        return b.age - a.age
      }
    })

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSexFilterChange = (e) => {
    setSelectedSex(e.target.value)
  }

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <div>
      <h1>User Management (Home)</h1>
      <div>
        <input
          type='text'
          placeholder='Search by name or lastname'
          onChange={handleSearch}
        />
        <select onChange={handleSexFilterChange}>
          <option value=''>All Sex</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
        <button className='toggle-sort' onClick={toggleSortOrder}>
          Toggle Age Order
        </button>
      </div>
      <UserTable users={filteredUsers} />
    </div>
  )
}

export default Home
