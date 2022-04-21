import React, { useEffect } from "react";
import './GraphExamResult.css';
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import HomeHelper from "../../HomeHelper";
import '../../../Pages/PageStyle.css';
import ResultTable from "./ResultTable/ResultTable";
import BarGraph from "./BarGraph/BarGraph";
import LineGraph from "./LineGraph/LineGraph";

const GraphExamResult = () => {
    const store = useSelector((store) => store);
    const history = useHistory();
  
    const semMarks = [
        {
            subject: 'math',
            internal: 45,
            external: 89
        },
        {
            subject: 'chemistry',
            internal: 46,
            external: 79
        },
        {
            subject: 'physics',
            internal: 49,
            external: 92
        },
        {
            subject: 'technical english',
            internal: 48,
            external: 90
        },
    ]

  return (
    <div>
      {store.student.isAuthenticated ? (
        <>
          <HomeHelper />
          <div className="bg row">
              <div className="col-12 col-sm-6">
                <ResultTable semMarks={semMarks}/>
              </div>
              <div className="col-12 col-sm-6">
                <BarGraph/>
                <LineGraph/>
              </div>
              
          </div>
        </>
      ) : (
                history.push("/")
      )}
    </div>
  )
}

export default GraphExamResult




