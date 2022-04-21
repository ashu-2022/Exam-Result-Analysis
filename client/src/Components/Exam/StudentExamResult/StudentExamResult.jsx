import "./StudentExamResult.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import HomeHelper from "../../HomeHelper";
import SemesterCard from "../SemesterCard/SemesterCard";
import StudentProfile from "../StudentProfile/StudentProfile";

const StudentExamResult = () => {
  const store = useSelector((store) => store);
  const history = useHistory();
  const studentData = {
    name: "Ashu",
    roll_no: 1809110045,
    course: "B.Tech",
    branch: "C.S.E.",
    session: "2018-2022",
    aggregate_percentage: 82,
  };
  const semesterData = {
    sem_1: {
      sem_no: 1,
      avg_perc: 81,
      sub_arr: ["math", "chemistry", "physics", "technical english"],
      marks_arr: [89, 78, 67, 80],
    },
    sem_2: {
      sem_no: 2,
      avg_perc: 88,
      sub_arr: ["math2", "electric engg", "mechanics", "TC"],
      marks_arr: [89, 78, 67, 80],
    },
    sem_3: {
      sem_no: 3,
      avg_perc: 76,
      sub_arr: ["microprocessor", "math3", "Operating System", "DSTL"],
      marks_arr: [89, 78, 67, 80],
    },
    sem_4: {
      sem_no: 4,
      avg_perc: 86,
      sub_arr: ["TOFL", "Data Structure", "Digital Electronics", "COA"],
      marks_arr: [89, 78, 67, 80],
    },
    sem_5: {
      sem_no: 5,
      avg_perc: 80,
      sub_arr: ["Compiler Design", "Algorithm", "Computer Network", "Programming"],
      marks_arr: [89, 78, 67, 80],
    },
    sem_6: {
      sem_no: 6,
      avg_perc: 85,
      sub_arr: ["Machine Learning", "Data Analytics", "UHV", "Project1"],
      marks_arr: [89, 78, 67, 80],
    },
    sem_7: {
      sem_no: 7,
      avg_perc: 79,
      sub_arr: ["Project2", "AI", "Graphics", "UHV2"],
      marks_arr: [89, 78, 67, 80],
    },
  };

  return (
    <div>
      {store.student.isAuthenticated ? (
        <>
          <HomeHelper />
          <div className="exam-result-container">
            <div className="row pt-4">
              <div className="col-12 col-sm-4">
                  <StudentProfile profile={studentData}/>
              </div>
              <div className="col-12 col-sm-8">
                <div className="sem-card-container">
                  <SemesterCard  data={semesterData.sem_1} />
                  <SemesterCard data={semesterData.sem_2} />
                  <SemesterCard data={semesterData.sem_3} />
                  <SemesterCard data={semesterData.sem_4} />
                  <SemesterCard data={semesterData.sem_5} />
                  <SemesterCard data={semesterData.sem_6} />
                  <SemesterCard data={semesterData.sem_7} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        history.push("/")
      )}
    </div>
  );
};

export default StudentExamResult;
