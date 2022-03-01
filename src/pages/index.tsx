import { TodoTable } from "@/component/TodoTable";

const Home: React.FC = () => (
  <div className="bg-primary-50 h-screen">
  <main className='mx-auto max-w-lg py-6'>
   <TodoTable />
  </main>
  </div>
);

export default Home;
