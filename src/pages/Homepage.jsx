import React, { useState } from 'react'

import Modal from '../components/modals/Modal'

export default function Homepage() {

  const [showModal, setShowModal] = useState(false);


  return (
    <div className='page container'>

      <h1>No worries, you made it home.</h1>
      <button onClick={() => setShowModal(true)}>open Modal</button>

      <Modal open={showModal} close={() => setShowModal(false)}>These are my lovely children</Modal>
    </div>
  )
}
