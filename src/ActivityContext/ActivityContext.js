import React from 'react';

const ActivityContext = React.createContext({
  categories: [],
  activities: [],
  updateData: () => { }
})

export default ActivityContext;