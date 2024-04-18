import React from 'react';
import './App.scss'
import JsonData from './static/data.json'
const App = () => {
  console.log('JsonData', JsonData.filter((obj) => !obj.completed));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Id</th>
            <th>User Id</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            (JsonData.filter((obj) => {
              if (obj.completed)
                return obj
              else {
                return null
              }
            })).map((obj, index) => {
              if (obj.completed === true) {
                return <tr key={index}>
                  <td>{obj.title}</td>
                  <td>{obj.id}</td>
                  <td>{obj.userId}</td>
                  <td>{obj.completed ? "Yes" : "No"}</td>
                </tr>
              }
              else {
                return null
              }
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;