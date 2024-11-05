import { cn } from "@/lib/utils";
import React from "react";

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType;
}

const VisuallyHidden = ({
    as: Component = "span",
    className,
    ...props
}: VisuallyHiddenProps) => {
    return (
        <Component
            className={cn(
                "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
                className
            )}
            {...props}
        />
    );
};
VisuallyHidden.displayName = "VisuallyHidden";
export { VisuallyHidden };
