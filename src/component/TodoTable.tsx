import { useState } from "react";

interface Todo {
    name:string;
    description?:string;
    isCompleted?:boolean;
}


const TodoTable: React.FC = () => {

    const initialTodos:Todo[] = [
        {
        name: 'task1',
        description: 'this is task1',
        isCompleted: false,
        },

        {
            name: 'task2',
            description: 'this is task2',
            isCompleted: true,
            },
        
         {
             name: 'task3',
             description: 'this is task3',
             isCompleted: false,
                },   

    ];
    //空にするため
    const initialFormState = {
        name: '',
        description: '',
        isCompleted: false,
    }
  
const initialEditIndex = -1;    

const [todos, setTodos] = useState<Todo[]>(initialTodos);
const [formState, setformState] = useState<Todo>(initialFormState);
const [isEdit, setIsEdit] = useState<Boolean>(false);
const [editIndex, setEditIndex] = useState<number>(initialEditIndex);

    const handleCreate =() => {
        //pushだと追加はするが、表示がされない
        // todos.push({ name: 'task4', isCompleted: false});
        if (formState.name=='') return;
        setTodos([...todos, {...formState, isCompleted: false}]);
        //入力後に空にしている
        setformState(initialFormState);
    }
    const handleInput =(key:string,value:string):void => {
       
        setformState({...formState, [key]: value})
    
    }

    const handleIsEdit =(todo: Todo, index:number):void => {
        setformState(todo);
        //編集する箇所のナンバーを取得している
        setEditIndex(index);
        setIsEdit(true);
        
    }

    const handleUpdate = () => {
        if(!formState.name) return;
        const updateTodos = [...todos];
        updateTodos [editIndex] = formState;
        setTodos(updateTodos)
        //update後にボタンを元に戻す
        setformState(initialFormState);
        setEditIndex(initialEditIndex);
        setIsEdit(false);
       
    }

return ( 
<div>
<h1　className="font-bold tracking-wider text-primary-800">To do 一覧</h1>
<table className="rounded overflow-hidden">
    <thead className="bg-primary-800 text-white">
        <tr>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Edit</th>
        </tr>
    </thead>
    <tbody>
        {todos.map((todo, index) => ( 
            <tr className="hover:bg-primary-100 bg-white" key={index}>
            <td className='pty-2 px-4'>
                <input type='checkbox' defaultChecked={todo.isCompleted} className='rounded text-primary-800'/>
                </td>
            <td className='pty-2 px-4'>{todo.name}</td>
            <td className='pty-2 px-4'>{todo.description}</td>
            <td className='pty-2 px-4　'>
                <button onClick={() => handleIsEdit(todo, index)} className="text-primary-800 underline">編集</button></td>
        </tr>
        
))}
       
    </tbody>

</table>
<div className="mt-10 grid gap-y-4">
    <input type-='text' className="bg-white border border-primary-500 placeholder:text-primary-200" placeholder="Name"
     value={formState?.name}
     onChange={(e) => handleInput('name', e.target.value)}
    />
    {/* <input type-='text' /> */}
   
</div>

<div className="mt-10 grid gap-y-4">
    <input type-='text' className="bg-white border border-primary-500 placeholder:text-primary-200" placeholder="Description"
     value={formState?.description}
     onChange={(e) => handleInput('description', e.target.value)}
    />
   
    {/* <input type-='text' /> */}
</div>
{isEdit ? (
    <button
    onClick={handleUpdate}　
    className='bg-primary-800 text-white px-4 py-2 mt-10 rounded hover:opacity-70'>更新

    </button>
) : (
<button　
onClick = {handleCreate}
className='bg-primary-800 text-white px-4 py-2 mt-10 rounded hover:opacity-70'>+新規追加</button>

)}
</div>
);
};
export {TodoTable};