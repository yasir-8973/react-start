import * as React from "react";
import styled from "@emotion/styled";

export namespace S {
	export const Item = styled.div<{ color: string }>`
		color: black;
		font-family: Helvetica, Arial;
		padding: 5px;
		margin: 0px 10px;
		border: solid 1px ${(p) => p.color};
		border-radius: 5px;
		margin-bottom: 2px;
		cursor: pointer;
	`;
}