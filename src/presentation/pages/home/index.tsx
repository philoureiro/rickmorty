import CardGrid from "../../components/cardGrid";
import Header from "../../components/header";
import SearchBar from "../../components/searchBar";
import "../../styles/index.css";
import { makeRemoteGetCharacters } from "../../../application/factories/usecases/characters/remote-getCharacters-factory";
import { useCallback, useState } from "react";
import debounce from "lodash.debounce";
function Home() {
  const [filter, setfilter] = useState<string>("");

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfilter(e.target.value);
  };

  const debouncedChange = useCallback(
    debounce(async (e) => {
      handleFilter(e);
    }, 700),
    []
  );

  return (
    <>
      <Header />
      <SearchBar
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          debouncedChange(e)
        }
      />
      <CardGrid getData={makeRemoteGetCharacters(1, filter)} />
    </>
  );
}

export default Home;
