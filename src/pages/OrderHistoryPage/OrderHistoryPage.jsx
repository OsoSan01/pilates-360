import { checkToken } from '../../utilities/user-services';

export default function OrderHistoryPage() {
async function handleCheckToken(){
  const expDate = await checkToken();
}

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken } >Check when my login expires</button>
    </>
  );
}