import React from "react";

// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Lorem, ipsum dolor.</h1>
//             <h3 className="centered" style={{color: '#777'}}>Lorem, ipsum dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, adipisci inventore illo nisi eveniet veritatis.</h3>
//         </section>
//     );
// }

export default function IntroSection() {
  return React.createElement("section", null, [
    React.createElement("h1", { className: "centered", key: 1 }, "Result University"),
    React.createElement("h3", { className: "centered", style: {color: '#333'}, key: 2 }, "lorem30"),
  ]);
}
