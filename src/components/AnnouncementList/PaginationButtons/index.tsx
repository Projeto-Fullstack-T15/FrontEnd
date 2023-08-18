import { Link } from "react-router-dom";
import { PaginationStyled } from "./style";

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
}

const PaginationButtons = ({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
}: PaginationButtonsProps) => {
  return (
    <PaginationStyled>
      {currentPage > 1 && <Link onClick={onPrevious}>&lt; Anterior</Link>}
      <span>{`${currentPage}`}</span>
      <span className="totalPages">de </span>{" "}
      <span className="totalPages">{` ${totalPages}`} </span>
      {currentPage < totalPages && (
        <Link onClick={onNext}> Seguinte &gt; </Link>
      )}
    </PaginationStyled>
  );
};

export default PaginationButtons;
