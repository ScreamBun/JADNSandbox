import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

interface SBScrollToTopProps {
    divID: string;
}

const SBScrollToTop = (props: SBScrollToTopProps) => {

    const { divID } = props;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.getElementById(divID)?.addEventListener("scroll", toggleVisibility, false);
        return () =>
            document.getElementById(divID)?.removeEventListener("scroll", toggleVisibility, false);
    }, [])

    const toggleVisibility = () => {
        if (divID && document.getElementById(divID)?.scrollTop) {
            setIsVisible(true);
        } else if (window.scrollY > 20 || document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const onScrollUp = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        document.getElementById(divID)?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        /*    <small style={{ display: isVisible ? '' : 'none' }} className='me-2 ms-2'>
               <a title="Scroll to the top of the page" onClick={onScrollUp} href="#">[Scroll to Top]</a>
           </small> */
        <button id="scrollToTopBtn" className="btn btn-info scroll-top-btn"
            title="Scroll to the top of the page"
            onClick={onScrollUp} style={{ opacity: isVisible ? '100' : '0' }}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button >
    );
}

export default SBScrollToTop;