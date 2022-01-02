import React from 'react';

export default function Profile() {
    return (
        <section>
            <div className="profile">
                <h1 className="profile-name">Gustavo Montoya</h1>
                <h4 className="profile-role">Full Stack Developer</h4>
                <p className="profile-website">https://github.com/gusmontoya</p>
            </div>
            <div className="buttons">       
                <button className="btn btn-email"><i className="fas fa-envelope"></i><a href="gus.montoya@gmail.com">Email</a></button>
                <button className="btn btn-linkedin"><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/gusmontoya/">LinkedIn</a></button>
            </div>
        </section>
    )
}
