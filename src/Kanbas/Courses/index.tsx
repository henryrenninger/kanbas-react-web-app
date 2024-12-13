import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import * as courseClient from './client';
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import ProtectedContent from "../Account/ProtectedContent";
import { useEffect, useState } from "react";
export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [enrolledUsers, setEnrolledUsers] = useState<any[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await courseClient.findUsersForCourse(course._id);
      setEnrolledUsers(users);
    };
    fetchUsers();
  }, [course._id]);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2> <hr />
      <div className="d-flex">
          <div className="d-none d-md-block">
            <CoursesNavigation />
          </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route
              path="People"
              element={<PeopleTable users={enrolledUsers} />}
            />
          </Routes>
        </div></div>
    </div>

  );
}
