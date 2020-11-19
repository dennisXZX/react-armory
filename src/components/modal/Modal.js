import ReactDOM from "react-dom";

// Using Portals feature to render content to another isolated DOM node
const Modal = (props) => {
  return ReactDOM.createPortal(
    props.children,
    // See <div id="modal"></div> in index.html
    document.getElementById("modal")
  );
};

export default Modal;
