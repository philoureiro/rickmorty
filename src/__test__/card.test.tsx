import { ICharacter } from "../interfaces/models/char";
import Card from "../presentation/components/card";

describe("<Card/>", () => {
  test("returns a card", async () => {
    const mockData: ICharacter = {
      id: 1,
      name: "test",
      status: "test",
      species: "test",
      type: "test",
      gender: "test",
      origin: {},
      location: {},
      image: "",
      episode: [],
      url: "test",
      created: "test",
    };
    expect(<Card item={mockData} />).toStrictEqual(<Card item={mockData} />);
  });
});
