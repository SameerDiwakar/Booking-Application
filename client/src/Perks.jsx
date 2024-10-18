import React from 'react'

const Perks = ({selected,onChange}) => {
    return (
        <>
            <label className='cursor-pointer border p-4 flex rounded-2xl gap-2 items-center'>
                <input type="checkbox" name="" id="" />
                <i className="fa-solid fa-wifi"></i>
                <span>Wifi</span>
            </label>
            <label className='cursor-pointer border p-4 flex rounded-2xl gap-2 items-center'>
                <input type="checkbox" name="" id="" />
                <i className="fa-solid fa-car"></i>
                <span>Parking</span>
            </label>
            <label className='cursor-pointer border p-4 flex rounded-2xl gap-2 items-center'>
                <input type="checkbox" name="" id="" />
                <i className="fa-solid fa-tv"></i>
                <span>TV</span>
            </label>
            <label className='cursor-pointer border p-4 flex rounded-2xl gap-2 items-center'>
                <input type="checkbox" name="" id="" />
                <i className="fa-solid fa-dog"></i>
                <span>Pets</span>
            </label>
            <label className='cursor-pointer border p-4 flex rounded-2xl gap-2 items-center'>
                <input type="checkbox" name="" id="" />
                <i className="fa-solid fa-camera"></i>
                <span>CCTV</span>
            </label>
            <label className='cursor-pointer border p-4 flex rounded-2xl gap-2 items-center'>
                <input type="checkbox" name="" id="" />
                <i className="fa-solid fa-door-open"></i>
                <span>Private Entry</span>
            </label>
        </>
    )
}

export default Perks
