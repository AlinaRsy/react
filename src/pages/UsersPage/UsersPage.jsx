import { useEffect } from "react";
import { useState } from "react"

export function UsersPage(){
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState();
    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: formData
        });
        e.target.reset();
        setMessage('Форма успешно отправлена');
    }
    async function fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }
    useEffect(()=>{
        fetchUsers();
    }, []);
    return(
        <section>
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" placeholder="имя пользователя"/>
                    <button type="submit">Отправить форму</button>
                    <div className="message">{message}</div>
                </form>
                {
                    users.map(user=>{
                        return(
                            <div className="user">{user.name}</div>
                        )
                    })
                }
                
            </div>
        </section>
    )
}