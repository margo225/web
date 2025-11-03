'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';
import Student from './Student/Student';
import AddStudent, { type FormFields } from './AddStudent/AddStudent';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  student: StudentInterface;
}
const OneStudent = ({ student }: Props): React.ReactElement => {
  

  return (
    <div className={`${styles.Student}`}>
      {`${student.id || 'xxxx'} - ${student.lastName} ${student.firstName} ${student.middleName}`}
    </div>
  );
};

export default OneStudent;