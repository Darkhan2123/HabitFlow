import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { habits as mockHabits } from './mockData';
import withLoading from './hoc/withLoading';
import 'antd/dist/reset.css';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [habits, setHabits] = useState([]);
  const [availableHabits, setAvailableHabits] = useState([]);

  useEffect(() => {
    if (isLoggedIn && Array.isArray(mockHabits)) {
      setHabits(mockHabits.filter((h) => h.userHas));
      setAvailableHabits(mockHabits.filter((h) => !h.userHas));
    }
  }, [isLoggedIn]);

  const addHabit = useCallback((habitNameOrId) => {
    setHabits((prevHabits) => {
      // Check if this is a new habit or an existing habit from available habits
      const isExistingHabit = mockHabits.find((h) => h.id === habitNameOrId);

      if (isExistingHabit) {
        // Adding an existing available habit
        if (!prevHabits.find((h) => h.id === isExistingHabit.id)) {
          return [...prevHabits, { ...isExistingHabit, userHas: true }];
        }
      } else {
        // Adding a new habit (generate a unique ID for it)
        const newHabit = {
          id: prevHabits.length + availableHabits.length + 1, // Ensure unique id
          name: habitNameOrId,
          userHas: true,
        };
        return [...prevHabits, newHabit];
      }

      return prevHabits; // Return unchanged if already exists
    });

    // Remove from available habits if it was an existing habit
    if (mockHabits.find((h) => h.id === habitNameOrId)) {
      setAvailableHabits((prevAvailable) =>
        prevAvailable.filter((h) => h.id !== habitNameOrId)
      );
    }
  }, [availableHabits]);



  const memoizedAvailableHabits = useMemo(() => availableHabits, [availableHabits]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header isLoggedIn={isLoggedIn} />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard habits={habits} availableHabits={memoizedAvailableHabits} onAddHabit={addHabit} /> : null} />
            <Route path="/profile" element={isLoggedIn ? <Profile habits={habits} /> : null} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default withLoading(App);
