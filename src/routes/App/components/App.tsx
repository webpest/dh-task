import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { Loader, DataTable, SearchBar } from 'components';
import { getTodos } from '../api';

import styles from '../styles/App.module.css';

const App = () => {
  const { isLoading, error, data } = useQuery<{}, Error>('todosData', getTodos);
  const memoizedData = useMemo(() => data, [data]);
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Completed',
        accessor: 'completed',
        Cell: ({ row }: any) => {
          return row.original.completed ? 'Yes' : 'No';
        },
      },
    ],
    []
  );

  if (isLoading) return <Loader />;

  if (error) return <span>An error has occurred</span>;

  const handleFilter = (searchKey: string, status: boolean) => {
    console.log('Hello', searchKey, status);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className="container">
          <h1>App</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <SearchBar handleFilter={handleFilter} />
          <DataTable data={memoizedData} columns={columns} />
        </div>
      </main>
    </div>
  );
};

export default App;
