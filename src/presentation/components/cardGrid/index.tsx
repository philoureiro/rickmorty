import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { IGetCharacters } from "../../../domain/usecases/interfaces/characters/getCharacters";
import Card from "../card";
import { IReq } from "../../../interfaces/models/req";
import LoadingComponent from "../loading";
import { Container, GridComponent } from "./styles";
import useWindowDimensions from "../../../application/hooks/useWindowSize";
import { gridResponsiveness } from "../../../utils/gridResponsiveness";
interface Props {
  getData: IGetCharacters;
}
function CardGrid({ getData }: Props) {
  const { width } = useWindowDimensions();
  const [data, setData] = useState<IReq | null>();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const makeRequest = async () => {
    setLoading(true);
    try {
      setData(await getData.get());
    } catch (error) {
      toast({
        title: "Dados não encontrados.",
        status: "error",
        variant: "left-accent",
        isClosable: true,
      });
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    makeRequest();
  }, [getData]);

  return (
    <Container>
      <LoadingComponent loading={loading} />
      {data && !loading && (
        <GridComponent repeat={gridResponsiveness(width)}>
          {data.results.map((items, index) => (
            <Card item={items} key={index} />
          ))}
        </GridComponent>
      )}
    </Container>
  );
}

export default CardGrid;
