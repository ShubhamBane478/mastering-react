import FileManager from "./file-maneger/fileManager";
import PaginationIQ from "./pagination/Pagination";
import ProgressBarPage from "./progress-bar/ProgressBarPage";

const ivQuestionData = [ {
    id: 1 , 
    title : "File Explorer",
    description : "Add folder and add files in it",
    projectName : "file-manager",
    projectComponent : FileManager
},
{
    id: 2 , 
    title : "Pagination ",
    description : "To display huge in chunks",
    projectName : "pagination",
    projectComponent : PaginationIQ
},
{
    id: 3 , 
    title : "Progress Bar ",
    description : "To display progress for certain task",
    projectName : "progress-bar",
    projectComponent : ProgressBarPage
}]

export default ivQuestionData;