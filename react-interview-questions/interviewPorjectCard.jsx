import { Link } from "react-router-dom";
import ivQuestionData from "./interviewProject";

export function InterviewProjectCard() {
  return (
    <>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ivQuestionData.map((cardData) => (
        <>
       
        <div
          key={cardData.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            className="rounded-t-lg"
            src={cardData.image || "https://placehold.co/200x200?text=Inteview\nQuestions"}
            alt={cardData.alt}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {cardData.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {cardData.description}
            </p>
            <Link
              to={`/react-interview-questions/${cardData.projectName}`}
              className="inline-block px-4 py-2 mt-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              View Project
            </Link>
          </div>
        </div>
        </>
    
     ))}
 
     </div>
     </>
  );
}
