import {useState} from 'react';
function School(){
    let subjects=[
        {Subject: "Maths", Teacher: "Mr. Jones", Room: "M1"},
        {Subject: "English", Teacher: "Ms. Smith", Room: "E4"},
        {Subject: "Science", Teacher: "Mr. Walker", Room: "S11"}
    ];
    function insertSubject(){
        subjects.push({Subject: "ICT", Teacher: "Mrs. Townsend", Room: "S15"});
        alert(subjects.length);
        console.log(subjects);
    };
    let [subject,addSubject]=useState(subjects);
    return(
        <>
            <input type="button" value="New Lesson" onclick={insertSubject}/>
            <table>
                <tr>
                    <td><b>Subject</b></td><td><b>Teacher</b></td><td><b>Room</b></td>
                </tr>
                {subjects.map((lesson)=>
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