import { ICharacter } from "./char";
import { IInfo } from "./info";

export interface IReq {
  info: IInfo;
  results: ICharacter[];
}
