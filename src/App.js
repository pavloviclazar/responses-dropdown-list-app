import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "l2kj6",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "l2kj6432",
      label: "Can I use JavaScript on a project?",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "l2kj6442",
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
