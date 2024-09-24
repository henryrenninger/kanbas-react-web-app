export default function AssignmentEditor() {
    return (
        <><div id="wd-assignments-editor">
            <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option>ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option>Percentage</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option>Online</option>
                        </select><br /><br />
                        <label>Online Entry Options</label><br />

                        <input type="checkbox" name="online-entry-type" id="wd-text-entry" />
                        <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="online-entry-type" id="wd-website-url" />
                        <label htmlFor="wd-chkbox-website-url">Website URL</label><br />

                        <input type="checkbox" name="online-entry-type" id="wd-media-recordings" />
                        <label htmlFor="wd-chkbox-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="online-entry-type" id="wd-student-annotation" />
                        <label htmlFor="wd-chkbox-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="online-entry-type" id="wd-file-upload" />
                        <label htmlFor="wd-chkbox-file-uploads">File Uploads</label>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign">Assign</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assign-to">Assign To</label><br />
                        <input id="wd-assign-to" value={"Everyone"} />
                        <br /> <br />
                        <label htmlFor="wd-due">Due</label><br />
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" />
                        <br /><br />
                        <tr>
                            <td>
                                <label htmlFor="wd-available-from">Available from</label><br />
                                <input type="date"
                                    id="wd-available-from"
                                    value="2024-05-06" />
                            </td>
                            <td>
                                <label htmlFor="wd-available-until">Until</label><br />
                                <input type="date"
                                    id="wd-available-until"
                                    value="2024-05-20" />
                            </td>
                        </tr>
                    </td>
                </tr>
            </table>
        </div>
            <hr />
            <button>Cancel</button> <button>Save</button>
        </>
    );
}
