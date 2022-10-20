import { IReq } from "../../../../interfaces/models/req";

export interface IGetCharacters {
  get: () => Promise<IReq>;
}
