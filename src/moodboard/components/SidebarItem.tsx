import * as React from "react";
import { ItemWidgetProps } from "../../interface/CommonProps";

export class SidebarItem extends React.Component<ItemWidgetProps> {

  onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  render() {
    return (
      <div className="sidebar-container">
        <div className="content">
          <div
            draggable={true}
            onDragStart={(event) => this.onDragStart(event, this.props.model.type)}
            className="sidebar-item"
          >
            {this.props.icon}
          </div>
          <div className="sidebar-item-name">{this.props.name}</div>
        </div>
      </div>
    );
  }
}
