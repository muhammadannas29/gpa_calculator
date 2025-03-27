import React, { useState } from "react";
import CourseRow from "./CourseRow";
import "./GpaCalculator.css";

const GpaCalculator = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "", credits: "", grade: "" },
  ]);

  
  const gradePoints = {
    A: 4.0,
    "A-": 3.67,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.67,
    "C+": 2.33,
    C: 2.0,
    "C-": 1.67,
    "D+": 1.3,
    D: 1.0,
    F: 0.0,
  };

  
  const updateCourse = (id, field, value) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  
  const addCourse = () => {
    if (courses.length < 10) {
      setCourses([
        ...courses,
        {
            id: Date.now(),
            name: "", 
            credits: "", 
            grade: "" },
      ]);
    }
  };

  
  const removeCourse = (id) => {
    if (courses.length > 1) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  const calculateGpa = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    courses.forEach((course) => {
      const credits = parseFloat(course.credits);
      const grade = gradePoints[course.grade];

      if (!isNaN(credits) && grade !== undefined) {
        totalCredits += credits;
        totalPoints += credits * grade;
      }
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  return (
    <>
           <div className="gpa-result">GPA: {calculateGpa()}</div>

      <div className="table-header">
        <span>Course Name</span>
        <span>Credits</span>
        <span>Grade</span>
      </div>

      {courses.map((course) => (
        <CourseRow
          key={course.id}
          course={course}
          onUpdate={updateCourse}
          onRemove={removeCourse}
          canRemove={courses.length > 1}
        />
      ))}

      <button className="add-btn" onClick={addCourse} disabled={courses.length >= 10}>
        Add Course
      </button>

    </>
  );
};

export default GpaCalculator;
