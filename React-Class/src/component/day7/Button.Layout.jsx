// const Button = ({ children, color = "red", background = "black", outline }) => {
//   console.log({ children, color, background });

//   if (outline) {
//     return (
//       <button
//         style={{
//           color: color,
//           backgroundColor: "transparent",
//           border: `1px solid ${background}`,
//           cursor: "pointer",
//           color: background,
//           borderRadius: 5,
//         }}
//       >
//         {children}
//       </button>
//     );
//   }

//   return (
//     <button
//       style={{
//         color: color,
//         backgroundColor: background,
//         cursor: "pointer",
//         borderRadius: 5,
//       }}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

// /**
//  *
//  * ! @description - What are props in ReactJS? Aasan bhasha me?
//  * Ans - Jese jab kisi ki baarat jaati hai to baarati or dulha change hota hai
//  * - Baaki ghodi, bagghi, instrument, gaane or bajane wale same rehte hai
//  */

// /**
//  *
//  * ! @description - What are props in ReactJS? Or Aasan bhasha me?
//  * Ans - Shadi ke garden me, sirf baarat or shadi wale change hote hai
//  * - Garden & place humesha same rehta hai,
//  * - Bus jisko shadi uske name or banner waha laga diye jaate hai
//  * - Taki jaane wale ko apnepan ki feeling aaye 😂
//  * - Bole to Props ka kehna hai, jesa chahoge me ban jaunga, tu to kaam bol 😂
//  */
// const ButtonV2 = ({
//   children,
//   color = "red",
//   background = "black",
//   outline,
// }) => {
//   console.log({ children, color, background });

//   return (
//     <button
//       style={{
//         color: outline ? background : color,
//         backgroundColor: outline ? "transparent" : background,
//         cursor: "pointer",
//         borderRadius: 5,
//         border: `1px solid ${outline ? background : "transparent"}`,
//       }}
//     >
//       {children}
//     </button>
//   );
// };

// export default ButtonV2;

const ButtonV3 = ({
  children,
  color = "red",
  background = "black",
  outline,
}) => {
  console.log({ children, color, background });

  const btnStyle = {
    color,
    backgroundColor: background,
    cursor: "pointer",
    borderRadius: 5,
  };

  if (outline) {
    btnStyle["backgroundColor"] = "transparent";
    btnStyle["border"] = `1px solid ${background}`;
    btnStyle["color"] = background;
  }

  return <button style={btnStyle}>{children}</button>;
};
