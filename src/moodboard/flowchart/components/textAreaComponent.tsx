import { Handle, Position } from "reactflow";
import ResizeTextArea from "../../helpers/resizeTextarea";
import React, { useCallback, useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import "../../styles/textarea.scss";

export default function TextField(props: any) {
  const [showText, setShowText] = useState<Boolean>(false);
  const [textValue, setTextValue] = useState<string>("");

  return (
    <div style={{ width: "304px", background: "#ecf0f1" }} >
      <Handle type="target" position={Position.Top} id="a" />      
        <div className="details-container">          
          <FaBeer className="draggable-elem" />
          <div className="EditableTitle">
            <ResizeTextArea className="notes-textarea" placeholder="Start typing..."/>
          </div>
        </div>
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}
