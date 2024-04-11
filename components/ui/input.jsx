import * as React from "react"

import {cn} from "@/lib/utils"

const Input = React.forwardRef(({className, type, ...props}, ref) => {
    return (
        (<input
            type={type}
            className={cn(
                "leading-none flex h-12 w-full border border-Grey border-input bg-GreyM px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-GreyM file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pb-[3px]",
                className
            )}
            ref={ref}
            {...props} />)
    );
})
Input.displayName = "Input"

export {Input}
