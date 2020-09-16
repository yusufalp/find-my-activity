import React from 'react';

const ActivityContext = React.createContext({
  categories: [],
  activities: [],
  getData: () => { }
})

export default ActivityContext;