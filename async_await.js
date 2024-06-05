async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData()