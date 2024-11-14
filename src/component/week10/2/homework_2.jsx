import React, { useEffect, useState } from 'react';

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('../../users.json')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error loading users:", error));
    }, []);

    return (
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