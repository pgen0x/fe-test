import * as React from "react";

const DepositIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentColor"
      d="m10.706 0 2.65 3.713 1.747-.595 1.595 4.665h.802v10H0v-10h.425v-.008l.54.005zM6.58 7.783h8.357l-.865-2.527-1.268.406zM5.282 6.464l6.426-2.189L10.372 2.4zM3.334 9.45H1.667v1.667A1.667 1.667 0 0 0 3.333 9.45m8.334 3.333a2.916 2.916 0 1 0-5.832 0 2.916 2.916 0 0 0 5.832 0m4.166 3.334V14.45a1.667 1.667 0 0 0-1.666 1.667zM14.167 9.45a1.667 1.667 0 0 0 1.666 1.667V9.45zm-12.5 6.667h1.666a1.666 1.666 0 0 0-1.666-1.667z"
    ></path>
  </svg>
);

export default DepositIcon;
