import React from 'react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

  return (
    <div className="flex justify-center gap-14 items-center mt-4">
      <Button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        variant="outline"
        className={`bg-blue-500 text-white rounded-full hover:bg-blue-700 hover:text-white ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Previous
      </Button>
      <span>Page {currentPage} of {totalPages}</span>
      <Button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        variant="outline"
        className={`bg-blue-500 text-white rounded-full hover:bg-blue-700 hover:text-white ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
