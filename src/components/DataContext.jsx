"use client";

import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <DataContext.Provider value={{ friends }}>
      {children}
    </DataContext.Provider>
  );
};