
const UserList = () => {
  const users = [];

  const renderCard = () => <div>Users Here</div>
  return (
    <div className="grid gap-5 md:grid-cols-2">
        {users.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No User</p>}
    </div>
  )
}

export default UserList