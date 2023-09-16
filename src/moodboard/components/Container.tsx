import * as React from "react";
import * as _ from "lodash";
import { S } from "../../namespace";
import { WidgetContainerProps } from "../../interface/WidgetContainerProps";
import {Application} from './Application';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Layer from "../flowchart";

export class Container extends React.Component {
  render() {
    var app = new Application();
    return (
      <S.Body>
        <Header />
        <S.Content>
          <Sidebar />
          <Layer />
          {/* <Layer app={app} /> */}
        </S.Content>
      </S.Body>
    );
  }
}
