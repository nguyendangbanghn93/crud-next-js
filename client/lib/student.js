export const getListStudent = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/students");
        const data = await response.json();
        return data.success ? data.students : []
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const deleteStudent = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/api/students/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data.success ? data.student : {}
    } catch (error) {
        console.log(error);
        return [];
    }
}
export const student_ids = async () => {
    try {
        const students = await getListStudent();
        return students.map(student => ({
            params: {
                id: `${student._id}`,
            },
        }))
    } catch (error) {
        console.log(error);
    }
}
export const getStudentById = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/api/students/${id}`);
        const data = await response.json();
        return data.success ? data.student : {}
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const createStudent = async (student) => {
    try {
        const response = await fetch(`http://localhost:5000/api/students`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student)
        });
        const data = await response.json();
        return data.success ? data.student : {}
    } catch (error) {
        console.log(error);
        return [];
    }
}
export const updateStudent = async (id, student) => {
    try {
        const response = await fetch(`http://localhost:5000/api/students/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student)
        });
        const data = await response.json();
        console.log('data____________', data);

        return data.success ? data.student : {}
    } catch (error) {
        console.log(error);
        return [];
    }
}


// {
//     url: "http://url",
//     method: "get",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: "",
// }