import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Student } from '../types';

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  const columns = React.useMemo(() => [
    { accessorKey: 'name', header: 'Name', enableSorting: true },
    { accessorKey: 'age', header: 'Age', enableSorting: true },
    { accessorKey: 'marks', header: 'Marks', enableSorting: true },
    { accessorKey: 'rollNumber', header: 'Roll Number', enableSorting: true },
    { accessorKey: 'avgMarks', header: 'Average Marks', enableSorting: true },
    { accessorKey: 'class', header: 'Class', enableSorting: true },
    { accessorKey: 'city', header: 'City', enableSorting: true },
    { accessorKey: 'attendance', header: 'Attendance', enableSorting: true },
  ], []);

  const table = useReactTable({
    data: students,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
  });

  return (
    <div className="overflow-x-auto w-full mx-auto">
      <Table className="min-w-full border border-gray-300 rounded-lg shadow-lg">
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id} className="bg-gray-200">
              {headerGroup.headers.map(header => (
                <TableHead key={header.id} className="p-3 text-left text-sm font-medium text-gray-700 cursor-pointer" onClick={() => header.column.toggleSorting()}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted() ? (header.column.getIsSorted() === 'desc' ? ' 🔽' : ' 🔼') : null}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id} className="hover:bg-gray-100 transition-colors duration-200">
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id} className="border px-4 py-2 text-sm text-gray-600">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentTable;
