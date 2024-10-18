import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Perks from '../Perks';

const PlacesPage = () => {
    const { action } = useParams();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [photoLink, setPhotoLink] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [price, setPrice] = useState(100);
    const [redirect, setRedirect] = useState(false);

    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }
    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }


    return (
        <div>
            {action !== 'new' && (
                <div className='text-center'>
                    <Link className='inline-flex gap-1 bg-primary rounded-full text-white py-2 px-6' to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add new place
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div>
                    <form action="">
                        {preInput('Title', 'Title for your place')}
                        <input type="text" placeholder='Title, for example "My Beautiful Place"' value={title} onChange={ev => setTitle(ev.target.value)} />
                        {preInput('Address', 'Address to this Place')}
                        <input type="text" placeholder='Address' value={address} onChange={ev=> setAddress(ev.target.value)} />
                        {preInput('Photos', 'More the photos better the feeling')}
                        <div className="flex gap-2">
                            <input type="text" placeholder={'Add using link...jpg'} value={photoLink}
                                onChange={ev => setPhotoLink(ev.target.value)} />
                            <button className='bg-gray-200 px-4 rounded-2xl'>Add&nbsp;Photo</button>
                        </div>
                        <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                            <button className='border bg-transparent rounded-2xl p-6 text-xl text-gray-600 flex justify-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                                </svg>
                                Upload</button>
                        </div>
                        {preInput('Description', 'Description of Place')}
                        <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
                        {preInput('Perks', 'Select all perks')}
                        <div className="mt-2 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                            <Perks selected={perks} onChange={setPerks} />
                        </div>
                        {preInput('Extra Info', 'House Rules, Instrucutions etc..')}
                        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
                        {preInput('Check in and Check out Time', 'Add Check in and Check out Time, remember to have some time window for cleaning the room between guests')}
                        <div className="grid gap-2 sm:grid-cols-3">
                            <div className='flex flex-col gap-1 items-start'>
                                <h3 className='mt-2 -mb-2'>Check in time</h3>
                                <input type="text" placeholder='12:00' value={checkIn}
                                    onChange={ev => setCheckIn(ev.target.value)} />
                            </div>
                            <div className='flex flex-col gap-1 items-start'>
                                <h3 className='mt-2 -mb-2'>Check out time</h3>
                                <input type="text" placeholder='18:00' value={checkOut}
                                    onChange={ev => checkOut(ev.target.value)} />
                            </div>
                            <div className='flex flex-col gap-1 items-start'>
                                <h3 className='mt-2 -mb-2'>Max number of guests</h3>
                                <input type="number" placeholder='4' value={maxGuests}
                                    onChange={ev => setMaxGuests(ev.target.value)} />
                            </div>
                        </div>
                        <button className='primary my-4'>Save</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default PlacesPage;
