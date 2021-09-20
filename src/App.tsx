import { Progress } from "./components/progress";
import { Result } from "./components/results";

const App = () => {
  return (
    <div className="m-5 border-2 rounded-md shadow-sm md:flex">
      <div className="md:w-3/4 my-6 md:p-8">
        <h1 className="pl-5 text-2xl font-medium">Statistics:</h1>
        <Progress
          title="Hard"
          type="error"
          attempts={4}
          maxPoints={3000}
          points={1200}
        />
        <Progress
          title="Middle"
          type="danger"
          attempts={3}
          maxPoints={2500}
          points={2000}
        />
        <Progress
          title="Easy"
          type="success"
          attempts={6}
          maxPoints={2000}
          points={800}
        />
      </div>
      <div className="md:w-1/4 p-5 md:p-10 bg-gray-100">
        <div className="text-center text-2xl font-medium mt-4 mb-4 md:mb-8">
          Well Done
        </div>
        <Result result={2} total={3} />
      </div>
    </div>
  );
};

export default App;
