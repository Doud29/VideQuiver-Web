import { createContext } from "react";

//----// On déclare notre context que l'on exporte, on lui fourni aussi un model

export const DescriptionContext = createContext({
  description: {},
  updateInpute: () => {},
});
