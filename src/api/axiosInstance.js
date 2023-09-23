
import axios from 'axios';

// Create an instance with custom configuration
const axiosIns = axios.create({
  baseURL: 'https://650d23a5a8b42265ec2bbb30.mockapi.io/', 
//   timeout: 10000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosIns;