import { format } from "date-fns";
import { useParams } from "react-router";
import * as db from "../../Database";
export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;

    console.log(aid);

    const assignment = assignments.find((assignment) => assignment._id === aid);

    return (

        <div id="wd-assignments-editor" className="container p-4">
            {assignment ? (
                <>
                    <div className="row mb-1">
                        <label htmlFor="wd-name">{assignment.title}</label>
                    </div>
                    <div className="row mb-4">
                        <input id="wd-name" value="A1" className="form-control narrow-box" />
                    </div>
                    <div className="row mb-4">
                        <textarea id="wd-description" className="form-control narrow-box tall-box">
                            {assignment.desciption}
                        </textarea>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-2 d-flex justify-content-end">
                            <label htmlFor="wd-points">Points</label>
                        </div>
                        <div className="col-md-4">
                            <input id="wd-points" value={assignment.points} className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-2 d-flex justify-content-end">
                            <label htmlFor="wd-assign">Assign</label>
                        </div>
                        <div className="col-md-4 border p-3 rounded">
                            <label htmlFor="wd-assign-to"><strong>Assign To</strong></label>
                            <input id="wd-assign-to"  className="form-control mb-3" />

                            <label htmlFor="wd-due">Due</label>
                            <input type="date" id="wd-due-date" value={assignment.due ? format(new Date(assignment.due), 'yyyy-MM-dd') : ''} className="form-control mb-3" />

                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-from">Available from</label>
                                    <input type="date" id="wd-available-from" value={assignment.available ? format(new Date(assignment.available), 'yyyy-MM-dd') : ''} className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-until">Until</label>
                                    <input type="date" id="wd-available-until"  className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="row mb-1">
                    <p>Assignment not found.</p>
                </div>
            )}
        </div>
    );
}
