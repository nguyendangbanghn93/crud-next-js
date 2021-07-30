import Link from "next/link";
import { Button, ButtonGroup, Container } from "react-bootstrap"
import Layout from "../../../components/Layout"
import StudentForm from "../../../components/StudentForm"
import { getStudentById, student_ids, updateStudent } from "../../../lib/student";
import { useRouter } from 'next/router';
import Banner from "../../../components/Banner";

const UpdateStudent = ({ student }) => {
    const router = useRouter()
    const onSubmit = async (data) => {
        const s = updateStudent(student._id, data);
        router.push("/students");
    };
    return (
        <Layout>
            <Banner title={`Update Student "${student.fullname}"`} />
            <Container className="mt50">
                <StudentForm submitHandler={onSubmit} student={student}>
                    <div className="tar">
                        <ButtonGroup >
                            <Button type="submit" variant="success">Update student</Button>
                            <Button type="reset" variant="danger">Reset</Button>
                            <Link href="/students"><Button variant="dark">Back</Button></Link>
                        </ButtonGroup>
                    </div>
                </StudentForm>
            </Container>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const paths = await student_ids();
    return {
        paths,
        fallback: true
    }
}
export const getStaticProps = async ({ params: { id } }) => {
    try {
        const student = await getStudentById(id);
        return {
            props: {
                student
            },
            revalidate: 1,
        }
    } catch (error) {
        console.log(error);
    }
}
export default UpdateStudent