// DynamicParams.tsx
import { useParams } from "react-router-dom";

type RouteParams = {
  userId: string;
};

const DynamicParams: React.FC = () => {
  const { userId } = useParams<RouteParams>();

  if (!userId) {
    return <p>Invalid user</p>;
  }

  return <h1>User ID: {userId}</h1>;
};

export default DynamicParams;
