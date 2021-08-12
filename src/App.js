import React, { useState } from "react";
import "./App.css";
import * as planets from "./components/snippets/index";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getComponentsFromSearchQuery = (query) => {
  // if there's no query, you probably want all the components
  if (!query) return Object.values(planets);

  const filter = query.split(",").map((v) => v.trim());

  return (
    Object.entries(planets)
      // get all planets that match the search query
      .filter(([k]) => filter.some((f) => k.indexOf(f) !== -1))
      // return just the component
      .map(([k, v]) => v)
  );
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [generateClick, setGenerateClick] = useState(false);

  const [components, setComponents] = useState(
    getComponentsFromSearchQuery("")
  );

  const handleChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(components);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setComponents(items);
  };

  const handleSubmit = async () => {
    setComponents(getComponentsFromSearchQuery(searchQuery));
    setGenerateClick(true);
  };

  return (
    <div className="App">
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="planet-name"
            >
              Planets
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={searchQuery}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleSubmit}
            >
              Generate
            </button>
          </div>
        </div>
      </form>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="planets">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {components.map((C, index) => {
                return (
                  <Draggable key={C.name} draggableId={C.name} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <C />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
