// React Phone Book We provided some simple React template code. 
// Your goal is to create a simple form at the top that allows the user to enter in a first name,
// last name, and phone number and there should be a submit button. 
// Once the submit button is pressed, the information should be displayed in a list below
// (automatically sorted by last name) along with all the previous information that was entered.
// This way the application can function as a simple phone book. When your application loads,
// the input fields (not the phone book list) should be prepopulated with the following values already:
//  First name = Coder 
//  Last name - Byte 
//  Phone = 8885559999 
//  You are free to add classes and styles, but make sure you leave the element ID's as they are.
//   Submit your code once it is complete and our system will validate your output.

import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
    table: {
        borderCollapse: "collapse",
    },
    tableCell: {
        border: "1px solid gray",
        margin: 0,
        padding: "5px 10px",
        width: "max-content",
        minWidth: "150px",
    },
    form: {
        container: {
            padding: "20px",
            border: "1px solid #F0F8FF",
            borderRadius: "15px",
            width: "max-content",
            marginBottom: "40px",
        },
        inputs: {
            marginBottom: "5px",
        },
        submitBtn: {
            marginTop: "10px",
            padding: "10px 15px",
            border: "none",
            backgroundColor: "lightseagreen",
            fontSize: "14px",
            borderRadius: "5px",
        },
    },
};

function PhoneBookForm(props) {

    const initContact = {
        id: null,
        userFirstname: "",
        userLastname: "",
        userPhone: "",
    };

    const [userState, setUserState] = useState(initContact);

    const handleUserChange = (e) => {
        setUserState({
            ...userState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        if (!userState.userFirstname || !userState.userLastname || !userState.userPhone) return;
        props.addUser(userState);
        setUserState(initContact);
    };

    return (
        <form onSubmit={handleSubmit} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userFirstname"
                name="userFirstname"
                type="text"
                value={userState.userFirstname}
                onChange={handleUserChange} />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userLastname"
                name="userLastname"
                type="text"
                value={userState.userLastname}
                onChange={handleUserChange} />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userPhone"
                name="userPhone"
                type="text"
                value={userState.userPhone}
                onChange={handleUserChange} />
            <br />
            <input
                style={style.form.submitBtn}
                className="submitButton"
                type="submit"
                value="Add User" />
        </form>
    );

}

function InformationTable(props) {
    debugger
    const sortedContacts = props.users.sort((a, b) => a.userLastname.localeCompare(b.userLastname));

    const display =
        sortedContacts.length > 0 ? (
            sortedContacts.map((user, index) => (
                <tr key={index}>
                    <td style={style.tableCell}>{user.userFirstname}</td>
                    <td style={style.tableCell}>{user.userLastname}</td>
                    <td style={style.tableCell}>{user.userPhone}</td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>&nbsp;</td>
            </tr>
        );

    return (
        <table style={style.table} className="informationTable">
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
            <tbody>{display}</tbody>
        </table>
    );
}

function Application(props) {
    const usersObj = [];

    const [users, setUsers] = useState(usersObj);

    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };

    return (
        <section>
            <PhoneBookForm addUser={addUser} />
            <InformationTable users={users} />
        </section>
    );
}


export default Application;

