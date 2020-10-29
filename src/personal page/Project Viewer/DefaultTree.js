const defaultTree = {
  title: "App",
  isOpen: true,
  folder: true,
  children: [
    {
      title: "HTML",
      isOpen: false,
      folder: false,
      children: [
        {
          title: "index.html",
          isOpen: false,
          folder: false,
          children: []
        }
      ]
    },
    {
      title: "CSS",
      isOpen: false,
      folder: false,
      children: []
    },
    {
      title: "JS",
      isOpen: false,
      folder: false,
      children: []
    },
  ]
};

export {defaultTree};