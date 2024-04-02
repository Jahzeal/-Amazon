
  import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

  export function dateTime() {
      const dateString = dayjs().format('dddd, MMMM D');
      return dateString; // Add this line to return the date string
  }
  
  