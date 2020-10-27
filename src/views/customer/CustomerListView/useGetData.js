import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGetData(allusers) {
  const [users, setusers] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem('logen-authorization');

    axios({
      method: 'GET',
      url: 'https://openlibrary.org/search.json',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        console.log('====================================');
        console.log(res.data.data);
        console.log('====================================');
        setusers(...res.data);
      })
      .catch(e => {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
      });
  }, [allusers]);

  return { users };
}
