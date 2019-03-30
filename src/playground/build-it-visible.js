// const toggleDetails = () => {
//   const content = document.getElementById('content');
//   const showDetails = document.getElementById('showDetails');
//   if (content.style.display === 'block') {
//     content.style.display = 'none';
//     showDetails.innerHTML = 'Show Details';
//   } else {
//     content.style.display = 'block';
//     showDetails.innerHTML = 'Hide Details';
//   }
// }

// const template = (
//   <div>
//     <h1>Visibility Toggle</h1>
//     <button id="showDetails" onClick={toggleDetails}>Show Details</button>
//     <p id="content" style={{display: "none"}}>Here are some details</p>
//   </div>
// )



let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
}

const render = () => {
  const jsx = (
    <div>
     <h1>Visibility Toggle</h1>
     <button onClick={toggleVisibility}>
      {visibility ? 'Hide details' : 'Show details'}
     </button>
     {visibility && <div><p>Hey! These are some details you can now see!</p></div>}
   </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
}

render();
