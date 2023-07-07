import { useEffect, useState } from "react";

const Instructors = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    // console.log(teachers);

    return (
        <section className="min-h-screen py-40">
            <article className="grid md:grid-cols-3 gap-20 mx-40">
                {
                    teachers?.map(teacher =>
                        <div 
                        
                        key={teacher.email}>
                            <img src={teacher.image} alt="teacher image" 
                            className="rounded-t-xl h-[300px] w-[300px] object-cover"/>
                            <h2 className="text-3xl font-bold">{teacher.name}</h2>
                            <p>email: {teacher.email}</p>
                        </div>
                    )
                }
            </article>
        </section>
    );
};

export default Instructors;