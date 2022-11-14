import React, { useState, KeyboardEvent } from 'react';
import ListItem  from './ListItem';
import Emoji from './Emoji';
import '../css/style.css';




const App = () => {

  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);
  const [sorted,setSorted] = useState<boolean | null>(null);

  const taskList = () => {
    return todoList.map((item,index) => {
      return <ListItem key={index}>{item}</ListItem>
    });
  }

  const onChange = (e) => {
    setTodoItem( e.target.value);
  }
  const onSubmit = (e) => {
    
    e.preventDefault();
  }

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if(e.defaultPrevented) {
      return;
    }
    console.log('e.key');
    console.log(e.key);
    if(e.key === 'Enter') {
      console.log('entra')
      todoList.push(todoItem);
      setTodoItem('');
    }
  }

  const clear = () => {
    setTodoList([]);
  }

  const toggleSort = (e: React.FormEvent<HTMLButtonElement>) => {
    if(!sorted) {
      todoList.sort();
      setSorted(true);
    }
    else {
      todoList.reverse();
      setSorted(false);
    }
  }

  
  return (
    <>
      <section className='todo'>
        <div className="todo__form">
          <form onSubmit={onSubmit} className="form">
            <div className="form__group">
              <input
                autoComplete='off'
                data-testid="add-item"
                className='form__input' 
                id="task"
                placeholder='task'
                type="text"
                value={todoItem}
                onChange={onChange}
                onKeyDown = {onKeyDown}
              />
              <label htmlFor='task' className="form__label">task</label>
            </div>
            <div className="form__group">
              { sorted || sorted === null?
                <button onClick={toggleSort} className='icon icon__arrow' data-testid="sort-direction">
                  <Emoji>↓</Emoji>
                </button>
              :
                <button onClick={toggleSort} className='icon icon__arrow' data-testid="sort-direction">
                  <Emoji>↑</Emoji>
                </button>
              }
            </div>
            <div className="form__group">
              <button className='icon' onClick={clear} data-testid="clear-list">
                <Emoji>
                  🆑
                </Emoji>
              </button>
            </div>
          </form>
        </div>
        {todoList.length > 0 &&
          <div className='todo__list'>
            <ul className='list' data-testid="items-list">
              {taskList()}
            </ul>
          </div>
        }
      </section>
    </>
  );
}

export default App;
