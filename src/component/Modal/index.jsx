import React, { useState } from 'react'
import './style.css'
import { FaWindowClose } from 'react-icons/fa'

const Modal = (opened, children, content) => {
    const [open, setOpen] = useState(opened)

    return (
        <>
            {children({ open, setOpen })}
            {open && (
                <div className='modal'>
                    <div className='modal-content'>
                        {content}
                        <FaWindowClose onClick={() => setOpen(false)}/>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal