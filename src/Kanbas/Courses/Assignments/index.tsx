import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButton";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { TfiWrite } from "react-icons/tfi";
import { addAssignment, updateAssignment, deleteAssignment }
  from "./reducer";
import AssignmentControlButtons from "./AssignmentControlButton";
import { FaTrash } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const handleDelete = (aid: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(aid));
    }
  };
  
  return (
    <div>
      <AssignmentControls /><br /><br />

      <h3 id="wd-assignments-title">

      </h3>

      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <div className="row">
              <div className="col">
                <BsGripVertical className="me-2 fs-3" />
                ASSIGNMENTS
              </div>
              <div className="col-2">
                <span className="wd-rounded-corners-all-around wd-border-thin wd-border-black wd-border-solid wd-padding-thin">
                  40% of Total
                </span>
                <AssignmentHeaderControlButtons />
              </div>
            </div>
          </div>
          <ul className="wd-assignments list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-assignment list-group-item p-3 ps-1">
                  <div className="row">
                    <div className="col-1">
                      <BsGripVertical className="me-2 fs-3" />
                      <TfiWrite className="me-2 fs-3 make-green" />
                    </div>
                    <div className="col">
                      <Link className="wd-assignment-link assignment-title me-2" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                        {assignment.title}
                      </Link><br />
                      <div className="d-inline-block">
                        <span className="red-text">Multiple Modules </span> | {(Date.parse(assignment.available.replace(/-/g, " ")) > 2024-10-22) ? <span><b>Not Available until </b>{format(assignment.available, "MMMM d 'at' hh:mma") + ' |'}</span> : ''} {(Date.parse(assignment.due.replace(/-/g, " ")) > 2024-10-22) ? <span><b>Due </b>{format(assignment.due, "MMMM d 'at' hh:mma") + ' |'}</span> : ''} {assignment.points} points 
                      </div>
                    </div>
                    <div className="col-1">
                    <FaTrash 
                        style={{ cursor: "pointer", color: "red" }} 
                        onClick={() => handleDelete(assignment._id)} // Pass the assignment ID to delete
                      /> <AssignmentControlButtons />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div >
  );
}