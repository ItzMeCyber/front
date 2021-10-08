import React, { useEffect, useState } from 'react';
export default function Api() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2').then((result) => {
            result.json().then((abc) => {
                //console.warn("result",resp);

                setData(abc.data)


            })

        })
    })
    return (<div className="App"><h1>GET API</h1>
        <table className="table-api bx-s1">
            <tr >
                <th className="th">NAME</th>
                <th className="th">EMAIL</th>
                <th className="th">ID</th>
                <th className="th">PHOTO</th>

            </tr>
            {
                data.map((data) => (
                    <tr>
                        <td className="td">{data.first_name}</td>
                        <td className="td">{data.email}</td>
                        <td className="td">{data.id}</td>
                        <td className="td"><img className="td-img" src={data.avatar} alt='abc' style={{ height: '60px' }} /></td>

                    </tr>)
                )
            }
        </table></div>);
}