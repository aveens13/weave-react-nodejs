import img1 from "../../../../assets/avatars/4.png";
import { useState, useEffect } from "react";
export default function Message(props) {
  console.log(props.message);
  return (
    <div className="message-body">
      <div className="name-info">
        <img src={img1} alt="" />
        <p>{props.message.sender}</p>
        <p className="grey">30 min ago</p>
      </div>
      <div className="message">{props.message.text}</div>
    </div>
  );
}
