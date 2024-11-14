export default function UserList() {
    const users = [
        {
            id: 1,
            userName: "홍길동",
            email: "a123@jeju.ac.kr"
        },
        {
            id: 2,
            userName: "임꺽정",
            email: "a123@jeju.ac.kr"
        },
        {
            id: 3,
            userName: "홍길동",
            email: "a123@jeju.ac.kr"
        },
    ];

    return(
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <p>이름: {user.userName}</p>
                    <p>이메일: {user.email}</p>
                </div>
            ))}
        </div>
    );
}