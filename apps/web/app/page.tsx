
import { client } from "@repo/db/client"



export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      Yes man You have done it.

     Yes you have fuckin done it. learning the deployment in a solid manner. 

      username: {user?.username}
      password: {user?.password}
    </div>
  );
}
