import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styles from "./modal.module.css"; // CSS module for styling

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    if (!isMounted || !isOpen) return null;

    return createPortal(
        <div className={styles.backdrop} onClick={onClose}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <div className={styles.header}>
                    {title && <h2>{title}</h2>}
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </div>,
        document.body // Portals render outside the root DOM element
    );
};

export default Modal;
