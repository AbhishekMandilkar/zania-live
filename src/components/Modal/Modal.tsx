import React, {ReactNode} from 'react'

interface IModal {
  children: ReactNode;
  handleClose: () => void;
}

const Modal = (props: IModal) => {
  const { children, handleClose } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(3, 3, 3, 0.51)",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          height: "50%",
          width: "50%",
          top: "25%",
          left: "25%",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button onClick={() => handleClose()}>Close</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;