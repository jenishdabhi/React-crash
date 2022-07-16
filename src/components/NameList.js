import React from "react";
import Person from "./Person";

function NameList() {
  const names=['brob','ayana','clark']
  const persons = [
    {
      name: "jenish",
      id: 1,
      age: "krs",
      skill: "react",
    },
    {
      name: "Kriss",
      id: 2,
      age: "krs",
      skill: "Angular",
    },
    {
      name: "vishal",
      id: 3,
      age: "krs",
      skill: "Vue",
    },
  ];
  const namesList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>);
  return <div>{namesList}</div>;
}

export default NameList;
