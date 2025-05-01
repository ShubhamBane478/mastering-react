import { useParams } from "react-router-dom";
import FileManager from "./file-maneger/fileManager";

// Import all project components

// Map projectName to component
const componentMap = {
  "file-manager": FileManager,
//   "project-two": ProjectTwo,
};

export function ProjectDetail() {
  const { projectName } = useParams();
  const ProjectComponent = componentMap[projectName];
  console.log(projectName);
  console.log(ProjectComponent);

  if (!ProjectComponent) {
    return (
        <>
        <FileManager/>
      <div className="text-center p-10 text-red-600">
        Project not found or not yet implemented.
      </div>
      </>
    );
  }

  return <ProjectComponent />;
}
