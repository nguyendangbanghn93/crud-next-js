import Link from "next/Link"
import { Button } from "react-bootstrap"
import Banner from "../components/Banner"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout >
      <Banner title="Student Manager">
        <p>This is my Student-manager app</p>
        <Link href="/students">
          <Button variant="dark">Start</Button>
        </Link>
      </Banner>
    </Layout>
  )
}

// export const
