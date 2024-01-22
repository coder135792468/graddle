import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@frontend/ui-components';
import { generateQuery } from '../utils';

export const PaginationButton = ({ totalPages, ...props }: any) => {
  const { page } = props.searchParams;
  const nextPage = !page ? '2' : (parseInt(page) + 1).toString();
  const prevPage = (parseInt(page) - 1).toString();
  return (
    <Pagination className="my-5">
      <PaginationContent>
        {page && page !== '1' && (
          <PaginationItem>
            <PaginationPrevious
              href={'/notes?' + generateQuery(props.searchParams, prevPage)}
            />
          </PaginationItem>
        )}
        <PaginationItem className="mx-5 text-gray-700">
          {parseInt(page) || 1}/{totalPages}
        </PaginationItem>
        {(!page || parseInt(page) < totalPages) && (
          <PaginationItem>
            <PaginationNext
              href={'/notes?' + generateQuery(props.searchParams, nextPage)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
