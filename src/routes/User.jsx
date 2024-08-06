import React from 'react';
import apiInstance from '../api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './user.css';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        apiInstance(`/users/${id}`)
            .then(res => setUser(res.data.data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <section className='user'>
            <div className="container">
                <div className="user__wrapper">
                    {user && (
                        <div className="user__profile">
                            <img src={user.avatar}  className="user__avatar_profile" />
                            <h3 className="user__name">{user.first_name} {user.last_name}</h3>
                            <p className="user__email">{user.email}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default User;
