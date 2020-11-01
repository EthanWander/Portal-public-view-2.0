import shortid from 'shortid';

const defaultTree = {
  title: "App",
  isOpen: true,
  folder: true,
  key: shortid.generate(),
  children: [
    {
      title: "HTML",
      isOpen: false,
      folder: false,
      children: [],
      key: shortid.generate(),
    },
    {
      title: "CSS",
      isOpen: false,
      folder: false,
      key: shortid.generate(),
      children: []
    },
    {
      title: "JS",
      isOpen: false,
      folder: false,
      key: shortid.generate(),
      children: []
    },
  ]
};

export {defaultTree};