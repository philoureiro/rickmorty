import { RemoteGetCharacters } from "../../../../data/usecases/remote-getCharacters";
import { IGetCharacters } from "../../../../domain/usecases/interfaces/characters/getCharacters";
import { makeApiUrl, makeAxiosHttpClient } from "../../http";

export const makeRemoteGetCharacters = (
  page: number,
  name: string
): IGetCharacters => {
  return new RemoteGetCharacters(
    makeApiUrl(`/api/character/?page=${page}&name=${name}`),
    makeAxiosHttpClient()
  );
};
