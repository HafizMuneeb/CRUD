
const UserList = () => {
  const users = [
    {id: '1', name: 'Hafiz Muneeb', email: 'muneeb@email.com'},
    {id: '2', name: 'Afzal', email: 'afzal@email.com'}
  ];

  const renderCard = () => users.map((user) => (
    <div className="bg-gray-300 p-5 flex items-center justify-between">
        <div>
            <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
            <span>{user.email}</span>
        </div>
        <div></div>
    </div>
  ))
  return (
    <div className="grid gap-5 md:grid-cols-2">
        {users.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No User</p>}
    </div>
  )
}

export default UserList