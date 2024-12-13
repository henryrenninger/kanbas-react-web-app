import { useSelector } from 'react-redux';
export default function ProtectedContent({
  children,
  username,
}: {
  children: any;
  username: string;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser && currentUser.username && currentUser.username === username) {
    return children;
  } else {
    return <></>;
  }
}
