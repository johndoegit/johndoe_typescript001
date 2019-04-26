// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>TypeScript sStarter</h1>
  <p id="demo"></p>
`;

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}