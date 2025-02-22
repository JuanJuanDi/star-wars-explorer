// "use client";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import React, { useMemo } from "react";
// import "../styles/Dock.css";


// export type DockItemData = {
//   icon: React.ReactNode;
//   label: React.ReactNode;
//   onClick: () => void;
//   className?: string;
// };

// export type DockProps = {
//   items: DockItemData[];
//   className?: string;
//   distance?: number;
//   panelHeight?: number;
//   baseItemSize?: number;
//   dockHeight?: number;
//   magnification?: number;
// };

// export default function Dock({
//   items,
//   className = "",
//   magnification = 70,
//   panelHeight = 68,
//   dockHeight = 256,
//   baseItemSize = 50,
// }: DockProps) {

//   const mouseX = useMotionValue(Infinity);
//   const isHovered = useMotionValue(0);

//   const maxHeight = useMemo(
//     () => Math.max(dockHeight, magnification + magnification / 2 + 4),
//     [magnification, dockHeight]
//   );
//   const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
//   const height = useSpring(heightRow, { mass: 0.1, stiffness: 150, damping: 12 });

//   return (
//     <motion.div
//       style={{ height, scrollbarWidth: "none" }}
//       className="dock-outer"
//     >
//       <motion.div
//         onMouseMove={({ pageX }) => {
//           isHovered.set(1);
//           mouseX.set(pageX);
//         }}
//         onMouseLeave={() => {
//           isHovered.set(0);
//           mouseX.set(Infinity);
//         }}
//         className={`dock-panel ${className}`}
//         style={{ height: panelHeight }}
//         role="toolbar"
//       >
//         {items.map((item, index) => (
//           <motion.div
//             key={index}
//             onClick={item.onClick}
//             className={`dock-item ${item.className}`}
//             style={{ width: baseItemSize, height: baseItemSize }}
//           >
//             <div className="dock-icon">{item.icon}</div>
//             <AnimatePresence>
//               <motion.div
//                 initial={{ opacity: 0, y: 0 }}
//                 animate={{ opacity: 1, y: -10 }}
//                 exit={{ opacity: 0, y: 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="dock-label"
//               >
//                 {item.label}
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// }
