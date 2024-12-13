import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProtectedContent from "../../Account/ProtectedContent";
import { addAssignment } from "./reducer";

export default function AssignmentControls() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddAssignment = () => {
    const aid = new Date().getTime().toString();
    const newAssignment = {
      _id: aid,
      title: "New Assignment",
      description: "Description of the assignment",
      points: 100,
      due: new Date().toISOString(),
      available: new Date().toISOString(),
      course: cid,
    };
    dispatch(addAssignment(newAssignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments/${aid}`);
  };

  return (
    <div className="row">
      <div className="col input-group">
        <span className="input-group-text">&#x1F50D;</span>
        <input
          className="form-control"
          id="wd-search-assignment"
          type="text"
          placeholder="Search..."
        />
      </div>
      <ProtectedContent username="iron_man">
        <div className="col">
          <button
            id="wd-add-assignment"
            className="btn btn-lg btn-danger float-end"
            type="button"
            onClick={handleAddAssignment}
          >
            + Assignment
          </button>
          <button
            id="wd-add-assignment-group"
            className="btn btn-lg btn-secondary float-end"
            type="button"
          >
            + Group
          </button>
        </div>
      </ProtectedContent>
    </div>
  );
}
