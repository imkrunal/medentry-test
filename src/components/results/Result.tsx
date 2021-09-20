import { CheckIcon } from "../icons";

type ResultProps = {
  result: number;
  total: number;
};

const Result = ({ result, total }: ResultProps) => (
  <div className="flex">
    <div className="result-wrapper">
      <CheckIcon className="h-6 w-6 text-gray-400" />
    </div>
    <div className="px-5">
      <div className="text-gray-500">Accuracy</div>
      <div className="font-medium">
        {result}/{total} correct answers
      </div>
    </div>
  </div>
);

export default Result;
