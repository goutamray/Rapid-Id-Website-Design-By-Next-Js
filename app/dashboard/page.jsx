
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import styles from "./dashboard.module.css"

export default async function Dashboard() {
  const session = await getServerSession();

    if (!session) {
      redirect("/")       
    }

  return (
    <>
      <div className={styles.dashboard}>
        <div className="container">
          <h2> DashBoard </h2>
        </div>
      </div>
    </>
  )
}



