import { calculatePercentage } from "../../utils/helper";

type ProgressProps = {
  title: string;
  attempts?: number;
  maxPoints: number;
  points: number;
  type?: "danger" | "error" | "success";
};

const Progress = ({
  title,
  attempts,
  maxPoints,
  points,
  type,
}: ProgressProps) => {
  const pointsWidth = calculatePercentage(points);
  const maxPointsWidth = calculatePercentage(maxPoints);

  return (
    <div className="p-5">
      <h5 className="font-medium mb-2">{title}</h5>
      <div className="border border-dashed h-12 rounded-md relative w-full">
        {points && (
          <div
            style={{ width: `${pointsWidth}%` }}
            className={`progress-${type}`}
          >
            <div className="top-2.5 relative">{points}</div>
          </div>
        )}
        {maxPoints && (
          <>
            <div
              style={{ width: `${maxPointsWidth}%` }}
              className="progress-gray"
            />
            <div
              style={{ width: `${maxPointsWidth}%` }}
              className="progress-text"
            >
              max {maxPoints} point
            </div>
          </>
        )}
      </div>
      {attempts && (
        <div className="progress-attempts">Attempts: {attempts}</div>
      )}
    </div>
  );
};

export default Progress;
