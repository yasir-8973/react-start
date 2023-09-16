import * as React from "react";
import { SidebarItem } from "./SidebarItem";
import '../styles/sidebar.scss';
import { BsList, BsLink45Deg, BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import {MdChecklist} from 'react-icons/md';
import {AiOutlineFileText} from "react-icons/ai";


export default () => {
  return (
    <div className="toolbar">
      <div className="toolbar-content">        
        <SidebarItem
          model={{ type: "textarea" }}
          name="Note"
          icon={<BsList />}
        />
        <SidebarItem
          model={{ type: "link" }}
          name="Link"
          icon={<BsLink45Deg />}
        />
        <SidebarItem
          model={{ type: "diamond" }}
          name="To-do"
          icon={<MdChecklist />}
        />
        <SidebarItem
          model={{ type: "sheet" }}
          name="Document"
          icon={<AiOutlineFileText />}
        />
        </div>
    </div>
  );
};
