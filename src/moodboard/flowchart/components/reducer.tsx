import React, {createContext} from 'react';
export function Reducer(
  state: State,
  action: Actions
): State {
  switch (action.type) {

    case "mode":
      return  {
        ...state,
        mode: action.payload 
      }
    case "colorMode":
      action.payload.toggleColorMode()
      return {
        ...state,
      }
  }
}

export interface ColorContextSchema {
  toggleColorMode: () => void;
}

export type State = {
  mode: string;
  colorMode: ColorContextSchema;
}

export type ActionsMap = {
  mode: any;
  colorMode: ColorContextSchema;
};

export type Actions = {
  [Key in keyof ActionsMap]: {
    type: Key;
    payload: ActionsMap[Key];
  };
}[keyof ActionsMap];

export type Dispatcher = <
  Type extends Actions["type"],
  Payload extends ActionsMap[Type]
>(
  type: Type,
  ...payload: Payload extends undefined ? [undefined?] : [Payload]
) => void;

type ContextInterface = readonly [State, Dispatcher];

export const Context = createContext<ContextInterface>([
  { mode: "light",colorMode: {} as ColorContextSchema },
  () => {},
]);



export default () => {};
