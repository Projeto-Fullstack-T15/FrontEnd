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
      {currentPage > 1 && (
        <button
          className="paginationButton"
          onClick={onPrevious}
        >
          &lt; Anterior
        </button>
      )}
      <span>{`${currentPage}`}</span>
      <span className="totalPages">de </span>{" "}
      <span className="totalPages">{` ${totalPages}`} </span>
      {currentPage < totalPages && (
        <button
          className="paginationButton"
          onClick={onNext}
        >
          {" "}
          Seguinte &gt;{" "}
        </button>
      )}
    </PaginationStyled>
  );
};

export default PaginationButtons;
