import React from 'react';
import Marks from './Marks';

const DisplayMarks = () => {
    const students = [
        { name: 'Abhi', roll: 231414, m1: 94, m2: 59, m3: 87 },
        { name: 'Yash', roll: 231534, m1: 94, m2: 59, m3: 87 },
        { name: 'Shivam', roll: 2312414, m1: 94, m2: 59, m3: 87 },
        { name: 'Shubham', roll: 2241414, m1: 94, m2: 59, m3: 87 },
        { name: 'Abhay', roll: 231442, m1: 94, m2: 59, m3: 87 },
        { name: 'Aakash', roll: 231424, m1: 94, m2: 59, m3: 87 },
    ];

    return (
        <div>
            {students.map((student, index) => (
                <Marks
                    key={index}
                    name={student.name}
                    roll={student.roll}
                    m1={student.m1}
                    m2={student.m2}
                    m3={student.m3}
                />
            ))}
        </div>
    );
};

export default DisplayMarks;
