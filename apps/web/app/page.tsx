
import { client } from "@repo/db/client"



export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
<h1>Welcome to production server</h1> 
<h1>I have created smooth ci-cd pipeline to automatically deploy my code.</h1>

      username: {user?.username}
      password: {user?.password}
    </div>
  );
}
