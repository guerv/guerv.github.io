import type { ReactNode } from "react";

type ContainerProps= {
    children: ReactNode;
}

const Container = ({children} : ContainerProps) => {
    return(
        <div className="flex flex-col m-10 gap-10 text-left">
            {children}
        </div>
    )
}

export default Container;