import React, { useState } from 'react';

const AddHabit = ({ onAddNewHabit }) => {
  const [newHabit, setNewHabit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newHabit.trim()) {
      onAddNewHabit(newHabit);
      setNewHabit('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4 mb-4">
      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="Add a new habit"
        className="border rounded-lg px-4 py-2 w-80 bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add Habit
      </button>
    </form>
  );
};

export default AddHabit;
