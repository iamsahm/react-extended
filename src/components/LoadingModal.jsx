import { useState, useEffect } from "react";
import { useGigs } from "../App";
import "./LoadingModal.css";

const LoadingModal = () => {
    const { loading } = useGigs();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let timeoutId;

        if (loading) {
            timeoutId = setTimeout(() => {
                setShowModal(true);
            }, 2000);
        } else {
            setShowModal(false);
            clearTimeout(timeoutId);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [loading]);

    return (
        showModal && (
            <dialog open={showModal}>
                <p>
                    The data for this app is loaded from a backend server which
                    takes a while to respond on first visit. Bear with us!
                </p>
            </dialog>
        )
    );
};

export default LoadingModal;
