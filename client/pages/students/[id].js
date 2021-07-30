import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import { getStudentById, student_ids } from "../../lib/student";
import { iDate } from "../../utils";

const StudentDetail = ({ student }) => {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <Spinner animation="border" role="status" variant="dark" className={spinnerStyles.spinnerLg}>
                <span className="sr-only">LOADING......</span>
            </Spinner>
        )
    }
    return (
        <Layout>
        <Banner title={student.fullname}/>
            <Container className="mt50">
                <Card className='my-3 shadow'>
                    <Card.Body>
                        <Card.Title>Họ và tên: {student.fullname}</Card.Title>
                        <Card.Text>
                            <div><b>Sinh nhật:</b> {iDate(student.birthday, "Ngày {j} tháng {n} năm {f}")}</div>
                            <div><b>Email:</b> {student.email}</div>
                            <div><b>Số điện thoại:</b> {student.phoneNumber}</div>
                        </Card.Text>
                        <Link href={`/students/update/${student._id}`}>
                            <Button variant='primary' className='mr15'>Cập nhật thông tin</Button>
                        </Link>
                        <Link href='/students'>
                            <Button variant='dark'>Quay lại</Button>
                        </Link>
                    </Card.Body>
                </Card>
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

export default StudentDetail
