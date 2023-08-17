import { useState } from "react";
import Announcement from "../../interfaces/announcement.interface";
import { ProductCard } from "../ProductCard";
import PaginationButtons from "./PaginationButtons";

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
    <div>
      {currentItems.map((product, index) => (
        <ProductCard
          key={index}
          announcement={product}
          announcerView={true}
        />
      ))}
      {totalPages > 1 && (
        <PaginationButtons
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
        />
      )}
    </div>
  );
};

export default AnnouncementList;
