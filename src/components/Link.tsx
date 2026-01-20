import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
    showIcon?: boolean
}

function Link({showIcon = true, children, ...props}: Props) {
    return (
        <a 
        {...props}
        className={`inline-flex items-center gap-1 ${props.className ?? ""}`}
        target="_blank"
        >
            {children}
            {showIcon && (
                <FontAwesomeIcon 
                    icon={faArrowUpRightFromSquare}
                    className="text-[0.7em]"
                />
            )}

        </a>
    )
}

export default Link;