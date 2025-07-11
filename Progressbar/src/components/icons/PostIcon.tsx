import * as React from "react";

const PostIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="m 0,2 0,1 7,4 7,-4 0,-1 z m 0,3 0,7 14,0 0,-7 -7,4 z" />
  </svg>
);

export default PostIcon;
