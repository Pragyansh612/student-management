import React from 'react';
import { Card } from '@/components/ui/card';
import { Student } from '../types';

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <Card className="p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
      <h2 className="font-bold text-lg text-gray-800">{student.name}</h2>
      <p className="text-gray-600">Age: {student.age}</p>
      <p className="text-gray-600">Marks: {student.marks}</p>
      <p className="text-gray-600">Roll Number: {student.rollNumber}</p>
      <p className="text-gray-600">Average Marks: {student.avgMarks}</p>
      <p className="text-gray-600">Class: {student.class}</p>
      <p className="text-gray-600">City: {student.city}</p>
      <p className="text-gray-600">Attendance: {student.attendance}</p>
    </Card>
  );
};

export default StudentCard;
