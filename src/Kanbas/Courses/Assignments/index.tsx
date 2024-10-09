import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControlButtons from "./AssignmentControlButton";
import AssingmentControls from "./AssignmentControls";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButton";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div>
      <AssingmentControls /><br /><br />

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
            <li className="wd-assignment list-group-item p-3 ps-1">
              <div className="row">
                <div className="col-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <TfiWrite className="me-2 fs-3 make-green" />
                </div>
                <div className="col">
                  <Link className="wd-assignment-link assignment-title me-2" to="/Kanbas/Courses/1234/Assignments/123">
                    A1
                  </Link><br />
                  <div className="d-inline-block">
                    <span className="red-text">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am |
                    <strong> Due</strong> May 13 at 11:59pm | 100 points
                  </div>
                </div>
                <div className="col-2">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
            <li className="wd-assignment list-group-item p-3 ps-1">
              <div className="row">
                <div className="col-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <TfiWrite className="me-2 fs-3 make-green" />
                </div>
                <div className="col">
                  <Link className="wd-assignment-link assignment-title me-2" to="/Kanbas/Courses/1234/Assignments/123">
                    A2
                  </Link><br />
                  <div className="d-inline-block">
                    <span className="red-text">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am |
                    <strong>Due</strong> May 20 at 11:59pm | 100 points
                  </div>
                </div>
                <div className="col-2">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
            <li className="wd-assignment list-group-item p-3 ps-1">
              <div className="row">
                <div className="col-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <TfiWrite className="me-2 fs-3 make-green" />
                </div>
                <div className="col">
                  <Link className="wd-assignment-link assignment-title me-2" to="/Kanbas/Courses/1234/Assignments/123">
                    A3
                  </Link><br />
                  <div className="d-inline-block">
                    <span className="red-text">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am |
                    <strong>Due</strong> May 27 at 11:59pm | 100 points
                  </div>
                </div>
                <div className="col-2">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div >
  );
}
