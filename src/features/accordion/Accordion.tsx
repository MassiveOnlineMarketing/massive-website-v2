'use client'


import { useEffect, useRef } from "react";
import { useAccordion } from "./AccordionContext";

import { cn } from "@/lib/utils";

import { HeadingProps, headingVariants } from "@/components/ui/typography/typography";
import { ChevronDownIcon } from "@heroicons/react/20/solid";


interface AccordionHeaderProps extends HeadingProps {
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
}

interface AccordionContentProps {
    children: React.ReactNode;
}



// Header
const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children, className, activeClassName, size = "xl", colorScheme = "default" }) => {
    const { toggleExpand, expand, padding } = useAccordion()
    // const tailwindPadding = padding / 4;
    const headingClasses = headingVariants({ size, colorScheme });

    return (
        <button
            className={cn(
                'w-full inline-flex justify-between items-center',
                'transition-colors duration-300 ease-linear',
                headingClasses,
                // `p-${tailwindPadding}`,
                className,
                `${expand ? `${activeClassName}` : ''}`,
            )}
            onClick={toggleExpand}
        >
            {children} <AccordionIcon />
        </button>
    );
};



// AccordionContent
const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const { expand, padding } = useAccordion();
    // const tailwindPadding = padding / 4;

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = expand ? `${contentRef.current.scrollHeight + padding}px` : '0';
        }
    }, [expand]);

    return (
        <div ref={contentRef} className={cn('max-h-0 overflow-hidden transition-all duration-300 ease-out text-black px-4',
            // `px-${tailwindPadding}  `,
            `${expand ? `pb-4` : ''}`)}
        >
            {children}
        </div>
    );
};


// Icon 
const AccordionIcon = () => {
    const { expand } = useAccordion() ?? { expand: false };

    return (
        <span>
            <ChevronDownIcon
                className={`fw-8 ml-auto h-8 transform transition-all duration-300 ${expand ? '-rotate-90' : ''}`}
            />
        </span>
    )
}

export { AccordionHeader, AccordionContent };