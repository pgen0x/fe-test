import * as React from "react";

const WithdrawIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="20"
    fill="none"
    viewBox="0 0 16 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.667 4H5.333V.667a.667.667 0 0 1 1.334 0zM12 9.635V5.333A1.334 1.334 0 0 0 10.667 4h-4v5.057l1.528-1.529a.667.667 0 0 1 .943.944l-2.666 2.666a.666.666 0 0 1-.944 0L2.862 8.472a.667.667 0 0 1 .943-.944l1.528 1.53V4h-4A1.333 1.333 0 0 0 0 5.333V16a.667.667 0 0 0 .667.667h6.225q.039.083.087.166l.02.032 1.855 2.833a.667.667 0 1 0 1.116-.73l-1.844-2.815a1 1 0 1 1 1.76-.955l.89 1.36A.668.668 0 0 0 12 16.192v-4.859a6.24 6.24 0 0 1 2 4.558v3.442a.667.667 0 1 0 1.333 0v-3.445A7.58 7.58 0 0 0 12 9.635"
    ></path>
  </svg>
);

export default WithdrawIcon;
