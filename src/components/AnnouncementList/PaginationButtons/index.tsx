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
    <div>
      {currentPage > 1 && <button onClick={onPrevious}>Anterior</button>}
      {` ${currentPage} de ${totalPages}`}
      {currentPage < totalPages && <button onClick={onNext}>Seguinte</button>}
    </div>
  );
};

export default PaginationButtons;
