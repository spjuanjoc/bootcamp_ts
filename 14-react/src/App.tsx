import React, {useState} from 'react';

import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
    // const todos = [{id: 't1', text: 'Second entry'}];
    const [todos, callback] = useState<{id:string, text:string}[]>([]);


    const addItem = (text:string) => {
      // console.log(text);
      callback((previous) => [
          ...previous,
          {id: Math.random().toString(), text:text}])
    };

    const removeItem = (id:string) => {
        callback((previous) => {
            return previous.filter( (entry) => entry.id !== id);
        });
    };

    return (
    <div className="App">
        <Form onAdd={addItem}/>
      <TodoList items={todos} onRemove={removeItem}/>
    </div>
  );
}

export default App;
