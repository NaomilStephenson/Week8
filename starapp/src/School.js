import {useState} from 'react';
function School(){
    let subjects=[
        {Subject: "Maths", Teacher: "Mr. Jones", Room: "M1"},
        {Subject: "English", Teacher: "Ms. Smith", Room: "E4"},
        {Subject: "Science", Teacher: "Mr. Walker", Room: "S11"}
    ];
    function Add(){
        subjects.push({Subject: "ICT", Teacher: "Mrs. Townsend", Room: "S15"});
        AddSubject(subjects);
        alert(subjects.length);
        console.log(subjects);
    };
    let [lesson,AddSubject]=useState(subjects);
    return(
        <>
            <input type="button" value="New Lesson" onclick={Add}/>
            <table>
                <tr>
                    <td><b>Subject</b></td><td><b>Teacher</b></td><td><b>Room</b></td>
                </tr>
                {lesson.map((lesson)=>
                    <tr>
                        <td>{lesson.Subject}</td>
                        <td>{lesson.Teacher}</td>
                        <td>{lesson.Room}</td>
                    </tr>)}
            </table>

        </>
    );
};

export default School;