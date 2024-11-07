import { format } from "date-fns";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment, deleteAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    const assignment = assignments.find((a: any) => a._id === aid);

    const [title, setTitle] = useState(assignment ? assignment.title : "");
    const [description, setDescription] = useState(assignment ? assignment.description : "");
    const [points, setPoints] = useState(assignment ? assignment.points : 0);
    const [due, setDue] = useState(assignment ? assignment.due : "");
    const [available, setAvailable] = useState(assignment ? assignment.available : "");

    const handleSave = () => {
        const newAssignment = { _id: aid || new Date().getTime().toString(), title, description, points, due, available, course: cid };
        if (assignment) {
            dispatch(updateAssignment(newAssignment));
        } else {
            dispatch(addAssignment(newAssignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        dispatch(deleteAssignment(aid));
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };


    return (
        <div id="wd-assignments-editor" className="container p-4">
            {assignment ? (
                <>
                    <div className="row mb-1">
                        <label htmlFor="wd-name">{assignment.title}</label>
                    </div>
                    <div className="row mb-4">
                        <input id="wd-name" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="form-control narrow-box" />
                    </div>
                    <div className="row mb-4">
                        <textarea
                            id="wd-description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            className="form-control narrow-box tall-box"
                        />
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-2 d-flex justify-content-end">
                            <label htmlFor="wd-points">Points</label>
                        </div>
                        <div className="col-md-4">
                            <input id="wd-points" value={points} onChange={(e) => setPoints(Number(e.target.value))} placeholder="Points" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-2 d-flex justify-content-end">
                            <label htmlFor="wd-assign">Assign</label>
                        </div>
                        <div className="col-md-4 border p-3 rounded">
                            <label htmlFor="wd-assign-to"><strong>Assign To</strong></label>
                            <input id="wd-assign-to" className="form-control mb-3" />
                            <label htmlFor="wd-due">Due</label>
                            <input type="date" id="wd-due-date" value={assignment.due ? format(new Date(assignment.due), 'yyyy-MM-dd') : ''} onChange={(e) => setDue(e.target.value)} placeholder="Due Date" className="form-control mb-3" />
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-from">Available from</label>
                                    <input type="date" id="wd-available-from" value={assignment.available ? format(new Date(assignment.available), 'yyyy-MM-dd') : ''} onChange={(e) => setAvailable(e.target.value)} placeholder="Available From" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-until">Until</label>
                                    <input type="date" id="wd-available-until" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <button id="wd-questions-cancel" onClick={handleCancel} className="btn btn-secondary">
                                Cancel
                            </button>
                        </div>
                        <div className="col-auto">
                            <button id="wd-questions-save" onClick={handleSave} className="btn btn-danger">
                                Save
                            </button>
                        </div>
                    </div>
                    <hr />
                </>
            ) : (
                <div className="row mb-1">
                    <p>Assignment not found.</p>
                </div>
            )}
        </div>
    );
}
