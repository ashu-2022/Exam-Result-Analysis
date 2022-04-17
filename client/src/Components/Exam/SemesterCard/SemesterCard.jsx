import './SemesterCard.css';
import React from 'react';
const SemesterCard = (props) => {
    // console.log("SemesterCard Props", props);
    const {sem_no, avg_perc, sub_arr, marks_arr} = props.data;
  return (
    <div className='sem-parent flex absolute-container'>
        <div className='sem-title text-center'>
            SEMESTER {sem_no}
        </div>
        <div className='sem-content'>
            <div className='sem-subjects'>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{sub_arr[0]}</li>
                <li class="list-group-item">{sub_arr[1]}</li>
                <li class="list-group-item">{sub_arr[2]}</li>
                <li class="list-group-item">{sub_arr[3]}</li>
            </ul>
            </div>
            <div className='sem-perc my-auto text-center'>
                {avg_perc} %
            </div>
        </div>
        <div className='text-center'>
            <button className='btn btn-info text-white mt-3'> View Result </button>
        </div>
    </div>
  )
}

export default SemesterCard
