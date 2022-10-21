import {
  Container,
  NumberLabel,
  LeftIcon,
  RightIcon,
  IconContainer,
} from "./styles";
interface IPaginationProps {
  handleClick: (page: number) => void;
  page: number;
}
function Pagination({ handleClick, page }: IPaginationProps) {
  return (
    <Container>
      <IconContainer
        onClick={(e) => {
          if (page > 1) handleClick(-1);
        }}
      >
        <LeftIcon />
      </IconContainer>
      <NumberLabel> {page}</NumberLabel>
      <IconContainer onClick={(e) => handleClick(1)}>
        <RightIcon />
      </IconContainer>
    </Container>
  );
}

export default Pagination;
