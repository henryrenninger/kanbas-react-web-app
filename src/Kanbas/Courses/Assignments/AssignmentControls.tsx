export default function AssingmentControls() {
    return (
        <div className="row">
            <div className="col input-group">
                <span className="input-group-text">&#x1F50D;</span>
                <input className="form-control" id="wd-search-assignment" type="text" placeholder="Search..." />
            </div>

            <div className="col">
                <button id="wd-add-assignment" className="btn btn-lg btn-danger float-end" type="button">- Assignment</button>
                <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary float-end" type="button">+ Group</button>
            </div>
        </div>
    );
}