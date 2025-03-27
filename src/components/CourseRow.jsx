import React from "react";
import "./CourseRow.css";

const CourseRow = ({ course, onUpdate, onRemove, canRemove }) => {
  return (
    <div className="course-row">
      <input
        type="text"
        placeholder="Eg. Web Engineering"
        value={course.name}
        onChange={(e) => onUpdate(course.id, "name", e.target.value)}
        className="course-input"
        required
      />
      <input
        type="number"
        placeholder="Eg. 3"
        value={course.credits}
        onChange={(e) => onUpdate(course.id, "credits", e.target.value)}
        className="credit-input"
        min="1"
        max="3"
        required
      />
      <select
        value={course.grade}
        onChange={(e) => onUpdate(course.id, "grade", e.target.value)}
        className="grade-select"
        required
      >
        <option value="">Select</option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
      {canRemove && (
        <button className="remove-btn" onClick={() => onRemove(course.id)}>
          ❌
        </button>
      )}
    </div>
  );
};

export default CourseRow;