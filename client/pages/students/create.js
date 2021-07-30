import Link from "next/link";
import { Button, ButtonGroup, Container } from "react-bootstrap"
import Layout from "../../components/Layout"
import StudentForm from "../../components/StudentForm"
import { createStudent } from "../../lib/student";
import { useRouter } from 'next/router';
import Banner from "../../components/Banner";

const CreateStudent = () => {
    const router = useRouter()
    const onSubmit = async (data) => {
        const student = await createStudent(data);
        router.push("/students")
    };
    return (
        <Layout>
            <Banner title="Add Student"/>
            <Container className="mt50">
                <StudentForm submitHandler={onSubmit}>
                    <div className="tar">
                        <ButtonGroup >
                            <Button type="submit" variant="success">Add student</Button>
                            <Button type="reset" variant="danger">Reset</Button>
                            <Link href="/students"><Button variant="dark">Back</Button></Link>
                        </ButtonGroup>
                    </div>
                </StudentForm>
            </Container>
        </Layout>
    )
}

export default CreateStudent