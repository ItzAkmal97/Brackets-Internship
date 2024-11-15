interface User {
    name: string,
    age: number,
    address: string,
    email: string,
    phone: number
}

const UserInformation = (User: User) => {
    return (
        <>
        <h1>Hi, My Name is {User.name}</h1>
        <p>My age is {User.age}</p>
        <p>My address is {User.address}</p>
        <p>My email is {User.email}</p>
        <p>My phone number is {User.phone}</p>
        </>
    )
}

export default UserInformation;