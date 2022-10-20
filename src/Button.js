import "./Button.css";
import { useState } from "react";
const initialState = true;

export default function Button() {
  const [state, setState] = useState(initialState);
  return (
    <main>
      <div className={state ? "card__answer--active" : "card__button-answer"} />

      <button
        className="card__button-answer"
        type="button"
        onClick={() => {
          setState((currentState) => {
            const newState = !currentState;
            return newState;
          });
          console.log(state);
        }}
      >
        Show answer
      </button>
    </main>
  );
}

//import "./ActiveToggle.css";
//import { useState } from "react";
//const initialState = true;

// function ActiveToggle() {
//   const [state, setState] = useState(initialState);
//   return (
//     <main>
//       <div className={state ? "box" : "box box--active"} />
//       <button
//         type="button"
//         onClick={() => {
//           setState((currentState) => {
//             const newState = !currentState;
//             return newState;
//           });
//           console.log(state);
//         }}
//       >
//         Activate
//       </button>
//     </main>
//   );
// }

// export default ActiveToggle;

// BUTTON VOR TOGGLE ÄNDERUNG
// export default function Button() {
//   return (
//     <button className="card__button-answer" type="button">
//       Show answer
//     </button>
//   );
// }
