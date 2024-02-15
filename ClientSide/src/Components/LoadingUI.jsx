import React from "react";

const LoadingAnimation = () => {
  return (
    <div className=" flex items-center justify-center h-screen  bg-orange-400 bg-opacity-25">
       <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "rgb(241, 242, 243)",
        display: "block",
        shapeRendering: "auto"
      }}
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(26.666666666666668,26.666666666666668)">
        <rect
          x="-20"
          y="-20"
          width="40"
          height="40"
          fill="#e6261f"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="0.35"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.3s"
          />
        </rect>
      </g>
      <g transform="translate(73.33333333333333,26.666666666666668)">
        <rect
          x="-20"
          y="-20"
          width="40"
          height="40"
          fill="#eb7532"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="0.35"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.2s"
          />
        </rect>
      </g>
      <g transform="translate(26.666666666666668,73.33333333333333)">
        <rect
          x="-20"
          y="-20"
          width="40"
          height="40"
          fill="#f7d038"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="0.35"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="0s"
          />
        </rect>
      </g>
      <g transform="translate(73.33333333333333,73.33333333333333)">
        <rect
          x="-20"
          y="-20"
          width="40"
          height="40"
          fill="#a3e048"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="0.35"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.1s"
          />
        </rect>
      </g>
    </svg>
    </div>
  );
};

export default LoadingAnimation;




// export default function ShimmerUI() {
//     return (
//         <div className="animate-pulse flex space-x-4">
//         {Array(12).fill("").map((index) =>
//          (<div key={index} className="grid gap-2"><div className='h-50 w-70 bg-slate-200 rounded'/> </div>))}
//        </div>
//       );
// }
 