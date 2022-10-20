import { Spinner } from "@chakra-ui/react";
interface LoadingProps {
  loading: boolean;
}

function LoadingComponent({ loading }: LoadingProps) {
  return loading ? (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      marginTop={10}
    />
  ) : null;
}

export default LoadingComponent;
