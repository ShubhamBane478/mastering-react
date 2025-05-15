/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";


export function ProjectDetail({projectData}) {

  const { projectName } = useParams();

  const project = projectData.find(p => p.projectName === projectName);

  const ProjectComponent = project.projectComponent;

  if (!project) {
    return (
        <>
        
      <div className="text-center p-10 text-red-600">
        Project not found or not yet implemented.
      </div>
      </>
    );
  }

  return <ProjectComponent />;
}
