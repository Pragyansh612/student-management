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
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'age', header: 'Age' },
    { accessorKey: 'marks', header: 'Marks' },
    { accessorKey: 'rollNumber', header: 'Roll Number' },
    { accessorKey: 'avgMarks', header: 'Average Marks' },
    { accessorKey: 'class', header: 'Class' },
    { accessorKey: 'city', header: 'City' },
    { accessorKey: 'attendance', header: 'Attendance' },
  ], []);

  const table = useReactTable({
    data: students,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto w-5/6 mx-24">
      <Table className="min-w-full border border-gray-300 rounded-lg shadow-lg">
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id} className="bg-gray-200">
              {headerGroup.headers.map(header => (
                <TableHead key={header.id} className="p-3 text-left text-sm font-medium text-gray-700">
                  {flexRender(header.column.columnDef.header, header.getContext())}
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
