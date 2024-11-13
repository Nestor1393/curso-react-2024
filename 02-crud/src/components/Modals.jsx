import React from 'react'
import Modal from './Modal'
import { useModal } from '../hooks/useModal'
import ContactForm from './ContactForm';
import SongSearch from './SongSearch';

const Modals = () => {
 const [isOpen1, openModal1, closeModal1] = useModal(false);
 const [isOpen2, openModal2, closeModal2] = useModal(false);
 const [isOpen3, openModal3, closeModal3] = useModal(false);
 const [isOpen4, openModal4, closeModal4] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <img src="https://picsum.photos/400/300" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
         <Modal isOpen={isOpen2} closeModal={closeModal2}>
          <h3>Modal 2</h3>
          <img src="https://picsum.photos/400/300" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facere quod optio dolores deleniti quibusdam at totam magnam provident nobis, fugit odio asperiores aliquam consequuntur illo pariatur, voluptatum quam officiis?</p>
        </Modal>
        <button onClick={openModal3}>Modal 3</button>
         <Modal isOpen={isOpen3} closeModal={closeModal3}>
          <ContactForm/>
        </Modal>
        <button onClick={openModal4}>Modal 4</button>
         <Modal isOpen={isOpen4} closeModal={closeModal4}>
          <SongSearch/>
        </Modal>
    </div>
  )
}

export default Modals
