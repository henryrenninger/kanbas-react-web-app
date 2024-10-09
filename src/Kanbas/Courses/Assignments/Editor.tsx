export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container p-4">
            <div className="row mb-1">
                <label htmlFor="wd-name">Assignment Name</label>
            </div>
            <div className="row mb-4">
                <input id="wd-name" value="A1" className="form-control narrow-box" />
            </div>
            <div className="row mb-4">
                <textarea id="wd-description" className="form-control narrow-box tall-box">
                    The assignment is available online. Submit a link to the landing page of
                </textarea>
            </div>

            <div className="row mb-3">
                <div className="col-md-2 d-flex justify-content-end">
                    <label htmlFor="wd-points">Points</label>
                </div>
                <div className="col-md-4">
                    <input id="wd-points" value={100} className="form-control" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2 d-flex justify-content-end">
                    <label htmlFor="wd-group">Assignment Group</label>
                </div>
                <div className="col-md-4">
                    <select id="wd-group" className="form-control">
                        <option>ASSIGNMENTS</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2 d-flex justify-content-end">
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </div>
                <div className="col-md-4">
                    <select id="wd-display-grade-as" className="form-control">
                        <option>Percentage</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2 d-flex justify-content-end">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </div>
                <div className="col-md-4 border p-3 rounded">
                    <select id="wd-submission-type" className="form-control mb-3">
                        <option>Online</option>
                    </select>
                    <label className="mb-3"><strong>Online Entry Options</strong></label><br />
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                        <label className="form-check-label" htmlFor="wd-chkbox-text-entry">Text Entry</label>
                    </div>

                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="wd-website-url" />
                        <label className="form-check-label" htmlFor="wd-chkbox-website-url">Website URL</label>
                    </div>

                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                        <label className="form-check-label" htmlFor="wd-chkbox-media-recordings">Media Recordings</label>
                    </div>

                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                        <label className="form-check-label" htmlFor="wd-chkbox-student-annotation">Student Annotation</label>
                    </div>

                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                        <label className="form-check-label" htmlFor="wd-chkbox-file-uploads">File Uploads</label>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2 d-flex justify-content-end">
                    <label htmlFor="wd-assign">Assign</label>
                </div>
                <div className="col-md-4 border p-3 rounded">
                    <label htmlFor="wd-assign-to"><strong>Assign To</strong></label>
                    <input id="wd-assign-to" value={"Everyone"} className="form-control mb-3" />

                    <label htmlFor="wd-due">Due</label>
                    <input type="date" id="wd-due-date" value="2024-05-13" className="form-control mb-3" />

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="wd-available-from">Available from</label>
                            <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="wd-available-until">Until</label>
                            <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary me-1">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}
