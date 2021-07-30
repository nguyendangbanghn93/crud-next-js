import Link from "next/link"
import { Button, ButtonGroup, Container } from "react-bootstrap"
import Layout from "../../components/Layout"
import MyTable from "../../components/MyTable"
import { deleteStudent, getListStudent } from "../../lib/student"
import { iDate } from "../../utils"
import Modal from "../../components/Modal"
import { useCallback, useState } from 'react';
import Banner from "../../components/Banner"
const Students = ({ students: listStudent }) => {
    const [isShowConfirmDeleteStudent, setIsShowConfirmDeleteStudent] = useState(false);
    const [dataStudent, setDataStudent] = useState({});
    const [students, setStudents] = useState(listStudent);
    const deleteHandler = useCallback((data) => {
        setDataStudent(data);
        setIsShowConfirmDeleteStudent(true);
    }, [])
    return (
        <Layout>
            <Modal
                isShow={isShowConfirmDeleteStudent}
                clickOverlayHandler={() => setIsShowConfirmDeleteStudent(false)}
                title="Thông báo"
                body={<div>Bạn có chắc chắn muốn xóa thông tin học sinh <b>"{dataStudent.fullname}"</b></div>}
                yesHandler={async () => {
                    const studentDelete = await deleteStudent(dataStudent._id);
                    setStudents(prevState => prevState.filter(student => student._id != studentDelete._id));
                    setIsShowConfirmDeleteStudent(false)
                }}
                noHandler={() => setIsShowConfirmDeleteStudent(false)}
            />
            <Banner title="List Student" />
            <Container className="mt50">
                <MyTable
                    configColumn={{
                        fullname: {
                            name: "Fullname"
                        },
                        birthday: {
                            name: "Birthday",
                            handler: val => iDate(val, "{j}/{n}/{f}")
                        },
                        email: {
                            name: "Email"
                        },
                        phoneNumber: {
                            name: "Phone number"
                        },
                        action: {
                            name: "Action",
                            handler: (val, dataRow) => {
                                return (
                                    <ButtonGroup>
                                        <Link href={`/students/${dataRow._id}`}><Button variant="outline-success">Detail</Button></Link>
                                        <Link href={`/students/update/${dataRow._id}`}><Button variant="outline-warning">Edit</Button></Link>
                                        <Button variant="outline-danger" onClick={() => deleteHandler(dataRow)}>Delete</Button>
                                    </ButtonGroup>
                                )
                            }
                        },
                        sortColumn: ["fullname", "birthday", "email", "phoneNumber", "action"]
                    }}
                    data={students}
                />
            </Container>
        </Layout>

    )
}

export const getStaticProps = async () => {
    const students = await getListStudent();
    return {
        props: {
            students,
            revalidate: 1,
        }
    }
}
export default Students