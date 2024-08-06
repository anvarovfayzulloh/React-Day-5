import React from 'react';
import apiInstance from '../api/Api';
import { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        apiInstance('/users?page=2')
            .then(res => setUsers(res.data.data));
    }, []);

    return (
        <section className='home'>
            <div className="container">
                <div className="home__wrapper">
                    {users.length > 0 ? (
                        <table className="user__table">
                            <thead>
                                <tr>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td><img src={user.avatar} className="user__avatar" /></td>
                                        <td><Link to={`/user/${user.id}`}>{user.first_name} {user.last_name}</Link></td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : <p>No users found.</p>}
                </div>
            </div>
        </section>
    );
}

export default Home;
