import * as React from "react";
import * as _ from "lodash";
import { S } from "../../namespace";
import { DefaultNodeModel } from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { HelperCanvasWidget } from "../helpers/HelperCanvasWidget";
import { WidgetContainerProps } from "../../interface/WidgetContainerProps";
import { DiamondNodeModel } from '../helpers/Diamond/DiamondNodeModel'

export default class Layer extends React.Component<WidgetContainerProps> {
  render() {
    return (
      <S.Layer
        onDrop={(event) => {
          var data = JSON.parse(
            event.dataTransfer.getData("storm-diagram-node")
          );
          var nodesCount = _.keys(
            this.props.app.getDiagramEngine().getModel().getNodes()
          ).length;

          var node: DefaultNodeModel | any = null;
          if (data.type === "in") {
            node = new DefaultNodeModel("Node " + (nodesCount + 1), "#ffffff");
            node.addInPort("In");
          } else if (data.type === "out") {
            node = new DefaultNodeModel("Node " + (nodesCount + 1), "#ffffff");
            node.addOutPort("Out");
          } else if (data.type === "diamond") {
            node = new DiamondNodeModel();
            node.setPosition(250,108);
          }
          var point = this.props.app
            .getDiagramEngine()
            .getRelativeMousePoint(event);
          node.setPosition(point);
          this.props.app.getDiagramEngine().getModel().addNode(node);
          this.forceUpdate();
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
      >
        <HelperCanvasWidget>
          <CanvasWidget engine={this.props.app.getDiagramEngine()} />
        </HelperCanvasWidget>
      </S.Layer>
    );
  }
}
