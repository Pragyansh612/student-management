import { useEffect, useState } from 'react';
import StudentTable from './components/StudentTable';
import StudentCard from './components/StudentCard';
import Pagination from './components/Pagination';
import { Student } from './types';
import studentsData from './students.json';

const App = () => {
  const [students] = useState<Student[]>(studentsData); 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(students.length / 10));

  const getPaginatedStudents = (page: number) => {
    const startIndex = (page - 1) * 10;
    return students.slice(startIndex, startIndex + 10);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(students.length / 10));
  }, [students]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-md mb-2">
          Student Management System
        </h1>
        <p className="text-lg text-gray-600">
          Efficiently manage and view student details.
        </p>
      </header>

      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:hidden gap-6">
          {getPaginatedStudents(currentPage).map((student) => (
            <StudentCard key={student.rollNumber} student={student} />
          ))}
        </div>
        <div className="hidden md:block">
          <StudentTable students={getPaginatedStudents(currentPage)} />
        </div>
      </main>
      
      <footer className="mt-8 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </footer>
    </div>
  );
};

export default App;
