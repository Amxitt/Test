
import { client } from "@repo/db/client"



export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
    
      <h1>  Welcome to dev Server</h1>

      username: {user?.username}
      password: {user?.password}
    </div>
  );
}
