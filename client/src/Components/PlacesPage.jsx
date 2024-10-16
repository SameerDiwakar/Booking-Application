import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PlacesPage = () => {
    const { action } = useParams();

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
                        <h2 className='text-2xl mt-4'>Title</h2>
                        <p className='text-gray-500 text-sm'>Title for your place</p>
                        <input type="text" placeholder='Title, for example "My Beautiful Place"' />
                        <h2 className='text-2xl mt-4'>Address</h2>
                        <p className='text-gray-500 text-sm'>Address to this Place</p>
                        <input type="text" placeholder='Address' />
                        <h2 className='text-2xl mt-4'>Photos</h2>
                        <p className='text-gray-500 text-sm'>More the photos better the feeling</p>
                        <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                        <button className='border bg-transparent rounded-2xl p-6 text-2xl text-gray-600'>+</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default PlacesPage;
