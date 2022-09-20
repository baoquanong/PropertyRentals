function Modal({ sumPrice }) {
  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="text-lg font-bold text-center">Success!</h3>
          <p className="py-4 text-center">{`You have paid $${sumPrice}`}</p>
        </label>
      </label>
    </div>
  );
}

export default Modal;
