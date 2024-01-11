import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    {
      id: 1,
      name: 'John',
      lastname: 'Doe',
      age: 30,
      sex: 'Male',
      role: 'Admin',
      experiences: [
        {
          id: 1,
          startDate: '2022-01-01',
          endDate: '2022-12-31',
          position: 'Software Developer',
          role: 'Developer',
        },
        {
          id: 2,
          startDate: '2021-03-15',
          endDate: '2022-01-01',
          position: 'Junior Developer',
          role: 'Developer',
        },
      ],
    },
    {
      id: 2,
      name: 'Jane',
      lastname: 'Doe',
      age: 25,
      sex: 'Female',
      role: 'User',
      experiences: [
        {
          id: 3,
          startDate: '2020-10-01',
          endDate: '2021-03-15',
          position: 'Intern',
          role: 'Developer',
        },
      ],
    },
    {
      id: 3,
      name: 'Bob',
      lastname: 'Johnson',
      age: 35,
      sex: 'Male',
      role: 'User',
      experiences: [
        {
          id: 4,
          startDate: '2019-05-15',
          endDate: '2020-10-01',
          position: 'Senior Developer',
          role: 'Developer',
        },
        {
          id: 5,
          startDate: '2018-02-01',
          endDate: '2019-05-15',
          position: 'Developer',
          role: 'Developer',
        },
      ],
    },
    {
      id: 4,
      name: 'Alice',
      lastname: 'Smith',
      age: 28,
      sex: 'Female',
      role: 'User',
      experiences: [
        {
          id: 6,
          startDate: '2017-01-01',
          endDate: '2018-02-01',
          position: 'Frontend Developer',
          role: 'Developer',
        },
        {
          id: 7,
          startDate: '2016-04-15',
          endDate: '2017-01-01',
          position: 'Web Developer',
          role: 'Developer',
        },
        {
          id: 8,
          startDate: '2015-08-01',
          endDate: '2016-04-15',
          position: 'Junior Developer',
          role: 'Developer',
        },
      ],
    },
    {
      id: 5,
      name: 'Charlie',
      lastname: 'Brown',
      age: 32,
      sex: 'Male',
      role: 'Admin',
      experiences: [
        {
          id: 9,
          startDate: '2014-03-01',
          endDate: '2015-08-01',
          position: 'System Administrator',
          role: 'Administrator',
        },
        {
          id: 10,
          startDate: '2013-06-15',
          endDate: '2014-03-01',
          position: 'IT Specialist',
          role: 'Administrator',
        },
        {
          id: 11,
          startDate: '2012-09-01',
          endDate: '2013-06-15',
          position: 'Support Technician',
          role: 'Support',
        },
      ],
    },
    // Add more users as needed
  ],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: state.users.length + 1,
        experiences: [], // Initialize experiences with an empty array
        ...action.payload, // Include other user details from the action payload
      }

      state.users.push(newUser)
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
    updateUser: (state, action) => {
      const { id, updatedUser } = action.payload
      const index = state.users.findIndex((user) => user.id === id)
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...updatedUser }
      }
    },
  },
})

export const { addUser, deleteUser, updateUser } = userSlice.actions
export const selectUsers = (state) => state.user.users

export default userSlice.reducer
