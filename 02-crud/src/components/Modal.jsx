import './modal.css';
const Modal = ({children, isOpen, closeModal}) => {
  const handleClick = (e)=> e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>X</button>
            {children}
      </div>
    </article>
  )
}

export default Modal
