import React, { Fragment } from 'react'

const ShowCites = ({ showCites, deleteOneCites}) => {

    const { id, name, OwnerName: on, date, time, textarea } = showCites

    return (
        <Fragment>
            <div className="card text-start mt-3">
                <div className="card-header">
                    <h6>id: {id}</h6>
                </div>
                <div className='card-body'>
                    <ul>
                        <li>Pet: {name}</li>
                        <li>Owner: {on}</li>
                        <li>Date: {date}</li>
                        <li>time: {time}</li>
                        <li>Textarea: {textarea}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <button
                        className='btn btn-danger'
                        onClick={()=> deleteOneCites(id)}
                    >delete</button>
                    <button className='btn btn-warning'>edit</button>
                </div>
            </div>

        </Fragment>
    );
};

export default ShowCites;