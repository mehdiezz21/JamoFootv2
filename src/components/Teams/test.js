import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { myApi } from '../../api/api';
  
const Test = () => {
  
  const [myOptions, setMyOptions] = useState([])
  
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
  
    fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].employee_name)
      }
      setMyOptions(myOptions)
    })
  }

  useEffect(() => {
    getEquipe()}, []
)
  const getEquipe = async () => {
    const data = await myApi.getTeam('all');
  }
  
  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
      <h3>Greetings from GeeksforGeeks!</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
}
  
export default Test