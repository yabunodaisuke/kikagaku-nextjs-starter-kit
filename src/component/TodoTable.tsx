interface Todo {
    name:string;
    description?:string;
    isCompleted?:boolean;
}


const TodoTable: React.FC = () => {
    
    const todos:Todo[] = [
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


return ( 
<div>
<h1　className="font-bold tracking-wider text-primary-800">To do 一覧</h1>
<table className="rounded overflow-hidden">
    <thead className="bg-primary-800 text-white">
        <tr>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Description</th>
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
        </tr>
        
))}
       
    </tbody>

</table>
</div>
);
};
export {TodoTable};