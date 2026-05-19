const Dialog = (
    {
        isOpen = false,
        dialogProps = { message: "this is dialog" },
        inCancel,
        inConfirm,
        ...props
    }
) => {
    if (!isOpen) return null;
    return (
        <div
            className="modal d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content shadow-lg border-0 rounded-4">

                    {/* HEADER */}
                    <div className="modal-header bg-dark text-white rounded-top-4">
                        <h5 className="modal-title">
                            Xác nhận
                        </h5>

                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            onClick={inCancel}
                        ></button>
                    </div>

                    {/* BODY */}
                    <div className="modal-body py-4">
                        <p className="mb-0 fs-5">
                            {dialogProps.message}
                        </p>
                    </div>

                    {/* FOOTER */}
                    <div className="modal-footer border-0">

                        <button
                            className="btn btn-secondary"
                            onClick={inCancel}
                        >
                            Hủy
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={inConfirm}
                        >
                            Xác nhận
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dialog;