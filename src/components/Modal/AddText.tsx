import React from "react";
interface Props {
  open: any;
  children: any;
  onClose: any;
}
/* <button onClick={onClose} className="box">*/
export default function AddText({ open, children, onClose }: Props) {
  if (!open) return null;
  return (
    <div>
      <button onClick={onClose} className="box">
        x
      </button>
      {children}
    </div>
  );
}
