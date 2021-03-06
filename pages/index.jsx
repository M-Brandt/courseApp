// pages/index.js

import { getCourses } from '../utils/db';

const Index = ({ courses }) => {
  return (
    <div>
      <h1>Welcome to the Course Section</h1>
      <pre>{JSON.stringify(courses, null, 2)}</pre>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getCourses();
  console.log(data);

  return {
    props: {
      courses: JSON.parse(JSON.stringify(data)),
    },
  };
};

export default Index;
