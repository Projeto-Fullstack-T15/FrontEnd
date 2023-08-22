import { useState } from "react";
import Announcement from "../../contexts/announces/interface";
import PaginationButtons from "./PaginationButtons";
import { AnnouncementsListStyled } from "./style";
import { ProductCard } from "../ProductCard";

interface ProductListProps {
  products: Array<Announcement>;
  itemsPerPage: number;
}
export const AnnouncementList = ({
  products,
  itemsPerPage,
}: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <AnnouncementsListStyled>
      <div className="content">
        {currentItems.map((product, index) => (
          <ProductCard
            key={index}
            announcement={product}
            announcerView={true}
          />
        ))}
      </div>
      <div className="pagination">
        {totalPages > 1 && (
          <PaginationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={handleNextPage}
            onPrevious={handlePreviousPage}
          />
        )}
      </div>
    </AnnouncementsListStyled>
  );
};

export default AnnouncementList;
