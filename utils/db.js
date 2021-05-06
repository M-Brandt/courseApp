import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getCourses = async () => {
  return prisma.course.findMany({
    include: {
      lessons: true,
    },
  });
};

export { getCourses };
