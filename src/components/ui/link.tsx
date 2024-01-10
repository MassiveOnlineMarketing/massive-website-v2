import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import Link, { LinkProps } from "next/link";

import { buttonVariants } from "./button";
import { VariantProps } from "class-variance-authority";

export interface ExternalAnchorProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
    href: string;
    asChild?: boolean;
}

const ExternalAnchor = React.forwardRef<HTMLAnchorElement, ExternalAnchorProps>(
    (
        { className, option, size, variant, asChild = false, ...props },
        ref
    ) => {
        const Comp = asChild ? Slot : "a";
        return (
            <Comp
                className={cn(
                    buttonVariants({option, size, variant, className })
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
ExternalAnchor.displayName = "ExternalAnchor";


interface InternalAnchorProps extends LinkProps,
VariantProps<typeof buttonVariants> {
    href: string;
    children?: React.ReactNode;
    className?: string;
}

const InternalAnchor = React.forwardRef<HTMLAnchorElement, InternalAnchorProps>(
    (
        { className, option, size, variant, href, ...props },
        ref
    ) => {
        return (
            <Link
                href={href}
                {...props}
                className={cn(
                    buttonVariants({ option, size, variant, className })
                )}
                ref={ref}
            ></Link>
        );
    }
);
InternalAnchor.displayName = "InternalAnchor";



export { ExternalAnchor, InternalAnchor };