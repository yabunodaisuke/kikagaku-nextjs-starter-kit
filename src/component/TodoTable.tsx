const TodoTable: React.FC = () => (
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
        <tr className="hover:bg-primary-100 bg-white">
            <th className='pty-2 px-4'>Status</th>
            <th className='pty-2 px-4'>Name</th>
            <th className='pty-2 px-4'>Description</th>
        </tr>

        <tr className="hover:bg-primary-100 bg-white">
            <th className='pty-2 px-4'>Status</th>
            <th className='pty-2 px-4'>Name</th>
            <th className='pty-2 px-4'>Description</th>
        </tr>
    </tbody>

</table>
</div>

    );
export {TodoTable};