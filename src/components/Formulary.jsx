import React, { Fragment, useState } from 'react';
import shortid from 'shortid';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import App from '../App';



const Formulary = ({getAllCites}) => {

    //useState
    const [getCites, setCites] = useState({name: '',OwnerName: '',date: '',time: '',textarea: ''});

    const [getCheckForm, setCheckForm] = useState(false)

    //edit setCites functions 
    const editSetCites = data => setCites({ ...getCites, [data.target.name]: data.target.value });

    //value extraction
    const { name, OwnerName: on, date, time, textarea } = getCites;

    //submit data
    const submitCites = e => {
        e.preventDefault();

        if (name.trim() === '' || on === '' || date === '', time === '', textarea === '') {
            setCheckForm(true);
            const mySwal = withReactContent(Swal).fire({
                icon: 'error',
                title: 'Sorry you need to completed all',
                width: 400,
                padding: '3em',
                color: '#716add',
                background: '#fff',
                backdrop: `
                    rgba(0,0,0,0.7)
                `
            })
            return;
        } else {
            const mySwal = withReactContent(Swal).fire({
                icon: 'success',
                title: 'Info Submit',
                width: 400,
                padding: '3em',
                color: '#716add',
                background: '#fff',
                backdrop: `
                    rgba(0,0,0,0.7)
                `
            })
            setCheckForm(false);
            getCites.id = shortid.generate();
            getAllCites(getCites);
            setCites({name: '',OwnerName: '',date: '',time: '',textarea: ''});
            return;
        }
    }

    return (
        <Fragment>
            <form
                onSubmit={submitCites}
            >

                <div className='form-floating mb-5 text-white'>
                    <h1>Create cite</h1>
                </div>

                <div className="form-floating mt-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        name='name'
                        placeholder="Pet name"
                        onChange={editSetCites}
                        value={name}
                    />
                    <label htmlFor="floatingInput">Pet name</label>
                </div>
                <div className="form-floating mt-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingPassword"
                        name='OwnerName'
                        placeholder="Owner name"
                        onChange={editSetCites}
                        value={on}
                    />
                    <label htmlFor="floatingPassword">Owner name</label>
                </div>

                <div className='form-floating mt-3'>
                    <input
                        type="date"
                        className='form-control'
                        name='date'
                        id='dateForm'
                        onChange={editSetCites}
                        value={date}
                    />
                </div>

                <div className='form-floating mt-3'>
                    <input
                        type="time"
                        className='form-control'
                        name='time'
                        id='timeForm'
                        onChange={editSetCites}
                        value={time}
                    />
                </div>

                <div className="form-floating mt-3">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        name='textarea'
                        onChange={editSetCites}
                        value={textarea}
                    ></textarea>
                    <label htmlFor="floatingTextarea">Comments</label>
                </div>

                <div className='form-floating mt-3 col-12'>
                    <button type="submit" className='btn btn-success col-12'>Submit</button>
                </div>
            </form>
        </Fragment>
    );

}

export default Formulary;