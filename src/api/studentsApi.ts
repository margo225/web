import type StudentsInterface from '@/types/StudentsInterface';

export const getGroupsApi = async (): Promise<StudentsInterface[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}groups`);
    const groups = await response.json() as StudentsInterface[];
    return groups;
  }
  catch (err) {
    console.log('>>> getGroupsApi', err);
    return [] as StudentsInterface[];
  }
  
};
