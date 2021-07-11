import React from 'react';
import { Spring } from 'react-spring';
import '../../static/css/timeline.css';
import Button from '@material-ui/core/Button';

// const { PUBLIC_URL } = process.env;

const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem',
  width: '800px',
  margin: 'auto',
  display: 'block',
  textAlign: 'center',
};

function Shoot() {
  // eslint-disable-next-line no-alert
  alert('Great Shot!');
}

function Timeline() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Timeline</h1>
            <Button onClick={Shoot} variant="contained">Default</Button>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Timeline;

// export default function Timeline() {
// <img src={`${PUBLIC_URL}/images/Asset 1.png`} className="App-logo" alt="logo" />
//   return (
//     <Spring
//       from={{ opacity: 0, marginTop: -500 }}
//       to={{ opacity: 1, marginTop: 0 }}
//     >
//       {(props) => (
//         <div style={props}>
//           <div style={c1Style}>
//             <h1>Component 1</h1>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
//               nobis adipisci eum minima deserunt at porro, veritatis officia
//               commodi itaque voluptates vel suscipit assumenda soluta ipsa
//               voluptatibus laudantium labore harum?
//             </p>
//           </div>
//         </div>
//       )}
//     </Spring>
//   );
// }
