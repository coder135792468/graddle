export interface QueryProps {
  page?: string;
  college?: string;
  search?: string;
}

export const generateQuery = (obj: QueryProps, newPage: string) => {
  let query = '';
  if (obj['search']) query += `&search=${obj['search']}`;
  if (obj['college']) query += `&college=${obj['college']}`;
  query += `&page=${newPage}`;
  return query.substring(1);
};
