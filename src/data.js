const states = {
  good: {
    color: '#00E227',
    name: 'Good',
  },
  normal: {
    color: '#B0C6EB',
    name: 'Normal',
  },
  bad: {
    color: '#FF00FA',
    name: 'Bad',
  },
};

const projects = [
  {
    key: 1,
    name: 'Project1',
    longitude: 1.33,
    latitude: 35.369,
    state: states.good,
  },
  {
    key: 2,
    name: 'Project2',
    longitude: 1.34,
    latitude: 35.369,
    state: states.bad,
  },
  {
    key: 3,
    name: 'Project3',
    longitude: 1.35,
    latitude: 35.36,
    state: states.normal,
  },
];

export const getProjects = () => projects;
