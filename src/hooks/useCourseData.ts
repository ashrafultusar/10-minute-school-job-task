'use client';
import { useEffect, useState } from 'react';

export const useCourseData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course', {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log('Error fetching data:', err));
  }, []);
  

  return { data };
};
