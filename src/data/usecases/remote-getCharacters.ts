import { InvalidParamsError, UnexpectedError } from "../../domain/errors";
import { IGetCharacters } from "../../domain/usecases/interfaces/characters/getCharacters";
import { ICharacter } from "../../interfaces/models/char";
import { HttpClient, HttpStatusCode } from "../protocols";

export class RemoteGetCharacters implements IGetCharacters {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ICharacter[]>
  ) {}
  get = async () => {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.badRequest:
        throw new InvalidParamsError(httpResponse.body?.message);
      default:
        throw new UnexpectedError();
    }
  };
}
