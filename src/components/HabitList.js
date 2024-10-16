import React from 'react';

const HabitList = ({ availableHabits, onAddHabits }) => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Available Habits</h3>
      {availableHabits?.map((habit) => (
        <div key={habit.id} className="mb-2">
          <span>{habit.name}</span>
          <button
            className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
            onClick={() => onAddHabits(habit.id)}
          >
            Add Habit
          </button>
        </div>
      ))}
    </div>
  );


export default HabitList;
