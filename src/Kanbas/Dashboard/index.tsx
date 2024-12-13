import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProtectedContent from "../Account/ProtectedContent";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, enrollments }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
      enrollments: any[];
    }) {


  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const [showEnrollments, setShowEnrollments] = useState<boolean>(false);
  const [userCourses, setUserCourses] = useState<any[]>([]);

  useEffect(() => {
    if (currentUser) {
      const enrolledCourses = courses.filter((course) =>
        enrollments.some(
          (enrollment: { user: string; course: string }) =>
            enrollment.user === currentUser._id && enrollment.course === course._id
        )
      );
      setUserCourses(enrolledCourses);
    }
  }, [currentUser, enrollments, courses]);

  const toggleEnrollments = () => {
    setShowEnrollments(!showEnrollments);
  };

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment: { user: string; course: string }) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

  const enrollInCourse = (courseId: string) => {
    dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
  };

  const unenrollInCourse = (courseId: string) => {
    const enrollment = enrollments.find(
      (enrollment: { user: string; course: string }) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
    if (enrollment) {
      dispatch(deleteEnrollment(enrollment._id));
    }
  };


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      
      <ProtectedContent username="iron_man">
        <h5>New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
            onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>
        </h5><br />
        <input value={course.name} className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <textarea value={course.description} className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        <hr />
      </ProtectedContent>

      {currentUser && (
        <button
          className="btn btn-primary float-end"
          onClick={toggleEnrollments}
        >
          {showEnrollments ? "Show Enrolled" : "Enrollments"}
        </button>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({showEnrollments ? courses.length : userCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(showEnrollments ? courses : userCourses).map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={
                    isEnrolled(course._id)
                      ? `/Kanbas/Courses/${course._id}/Home`
                      : "/Kanbas/Dashboard"
                  }
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src="/images/reactjs.jpg"
                    width="100%"
                    height={160}
                    alt="Course"
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                    {!currentUser && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                    {currentUser && (
                      <>
                        {isEnrolled(course._id) ? (
                          <button
                            className="btn btn-danger mx-2"
                            onClick={(e) => {
                              e.preventDefault();
                              unenrollInCourse(course._id);
                            }}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success mx-2"
                            onClick={(e) => {
                              e.preventDefault();
                              enrollInCourse(course._id);
                            }}
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}