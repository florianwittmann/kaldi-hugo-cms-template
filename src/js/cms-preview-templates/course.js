import React from "react";
import format from "date-fns/format";

export default class CoursePreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
    <b>{ entry.getIn(["data", "dayofweek"])}</b> { entry.getIn(["data", "starttime"])}
      <div className="cms mw6">
        { widgetFor("body") }
      </div>
    </div>;
  }
}
