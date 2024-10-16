import React from 'react';
import HabitList from '../components/HabitList';
import AddHabit from '../components/AddHabit';

const Dashboard = ({ habits, availableHabits, onAddHabit }) => {

  return (
    <div className="container mx-auto text-center p-6">
      <h2 className="text-3xl font-bold mb-8">Dashboard</h2>

      <div className="mb-6">
        <AddHabit onAddNewHabit={onAddHabit} />
      </div>

      <div className="mb-8">
        <HabitList availableHabits={availableHabits} onAddHabits={onAddHabit} />
      </div>
    </div>
  );
};

export default Dashboard;
