import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
 
// Types for Heading
export type HeadingProps = VariantProps<typeof headingVariants> &
    React.ComponentPropsWithoutRef<"h1"> &
{
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    transition?: string;
};

// Types for Highlight
export type HighlightProps = VariantProps<typeof highlightVariants> & {
    highlight?: string;
};

// Combined Types for Heading with Highlight
export type HeadingWithHighlightProps = HeadingProps & HighlightProps;


// Types for SubHeading
export type SubHeadingProps = VariantProps<typeof subHeadingVariants> &
    React.ComponentPropsWithoutRef<"h1"> &
{
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    className?: string;
};

// Types for Paragraph
export type ParagraphProps = VariantProps<typeof paragraphVariants> & 
    React.ComponentPropsWithoutRef<"p"> & 
{
    className?: string;
};



// Heading variant options
export const headingVariants = cva(
    "transition-all",
    {
        defaultVariants: {
            colorScheme: "default",
        },
        variants: {
            size: {
                '5xl': "text-4xl leading-10 font-bold md:text-5xl md:leading-none",
                '4xl': "text-3xl leading-9 font-bold md:text-4xl md:leading-10",
                '3xl': "text-2xl leading-8 font-bold md:text-3xl md:leading-9",
                '2xl': "text-base leading-6 font-semibold md:text-2xl md:leading-8",
                xl: "text-base md:text-xl font-semibold leading-7",
                lg: "text-lg leading-6 font-semibold md:text-lg md:leading-6",
                base: "text-base leading-6 font-semibold md:text-base md:leading-6",
                sm: "text-sm leading-5 font-semibold md:text-sm md:leading-5",
                xs: "text-xs leading-4 font-semibold md:text-xs md:leading-4",
            },
            colorScheme: {
                default: "text-gray-800 dark:text-gray-100",
                muted: "text-gray-600 dark:text-gray-400",
                accent: "text-indigo-600 dark:text-indigo-400",
                donker: "text-[#1F2937]",

                'gradient-primary': 'text-gradient-primary',
            },
            type: {
                icon: 'flex gap-[10px] items-center'
            }
        },
    }
);

// SubHeading variant options
export const subHeadingVariants = cva(
    "transition-all w-fit",
    {
        defaultVariants: {
            size: "xl",
            colorScheme: "default",
        },
        variants: {
            size: {
                xl: "text-xl leading-7 font-semibold",
                lg: "text-lg leading-6 font-semibold",
                base: "text-base leading-6 font-semibold",
                sm: "text-sm leading-5 font-semibold",
                xs: "text-xs leading-4 font-semibold",
            },
            colorScheme: {
                default: "text-gray-900 dark:text-gray-100",
                // muted: "text-gray-600 dark:text-gray-400",
                // accent: "text-indigo-600 dark:text-indigo-400",
                purple: "text-purple-600 bg-purple-100 dark:text-purple-400",
                gray: "text-gray-500 bg-gray-50",
                'text-purple': "text-purple-500" ,
                'gradient-primary': 'text-gradient-primary',
                'glass' : 'text-gray-800  shadow-md backdrop-blur-md bg-gradient-to-b from-[#fff]/60 to-[#fff]/50 bg-white/60 glass-border-gradient relative', 
                'glass-dark': 'text-white shadow-md backdrop-blur-md bg-gradient-to-b from-[#1F29371A]/60 to-[#1F29371A]/50 dark-glass-border-gradient relative'
            },
            variant: {
                rounded: "rounded-full",
                box: "rounded-md",
                test: "py-[2px] px-[12px] rounded-[20px] shadow-sm border border-white capitalize",
                base: "py-2 px-4 rounded-full shadow-sm border-2 border-white",
                pill: 'py-[6px] px-5 rounded-[20px]'
            },
            type: {
                icon: 'flex gap-[10px] items-center'
            }
        },
    }
);

// Highlight variant options
export const highlightVariants = cva(
    "transition-all",
    {
        defaultVariants: {
            colorSchemeHighlight: "default",
        },
        variants: {
            colorSchemeHighlight: {
                default: "text-gray-900 dark:text-gray-100",
                muted: "text-gray-600 dark:text-gray-400",
                accent: "text-indigo-600 dark:text-indigo-400",
                'gradient-primary': 'text-gradient-primary',
            },
        },
    }
);

export const paragraphVariants = cva(
    "transition-all",
    {
        defaultVariants: {
            colorScheme: "default",
        },
        variants: {
            size: {
                xl: "text-xl leading-7",
                lg: "text-lg leading-6",
                base: "text-base leading-6",
                sm: "text-sm leading-5",
                xs: "text-xs leading-4",
            },
            colorScheme: {
                default: "text-gray-900 dark:text-gray-100",
                muted: "text-gray-600 dark:text-gray-400",
                accent: "text-indigo-600 dark:text-indigo-400",
            },
        },
    }
);

// Heading component
const Heading: React.FC<HeadingWithHighlightProps> = (
    {
        level = "h1",
        size = "xl",
        colorScheme = "default",
        className,
        highlight,
        colorSchemeHighlight ,
        transition,
        type,
        children,
        ...props
    }) => {

    // Options for rendering the correct heading level
    const Component = level as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

    // Get the correct class names
    const headingClasses = headingVariants({ size, colorScheme, type });
    const highlightClasses = highlightVariants({ colorSchemeHighlight });

    return (
        <Component className={cn(headingClasses, className, transition)} {...props}>
            {highlight && children ? (
                <>
                    {children.toString().split(highlight).map((part, i, arr) => (
                        <>
                            {part}
                            {i < arr.length - 1 && <span key={i} className={cn(highlightClasses, className)}>{highlight}</span>}
                        </>
                    ))}
                </>
            ) : (
                children
            )}
        </Component>
    );
};



const SubHeading: React.FC<SubHeadingProps> = (
    {
        level = "h1",
        size = "xl",
        colorScheme = "default",
        variant,
        className,
        children,
        type,
        ...props
    }
) => {

    // Options for rendering the correct heading level
    const Component = level as "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

    // Get the correct class names
    const subHeadingClasses = subHeadingVariants({ size, colorScheme, variant, type });

    return (
        <Component className={cn(subHeadingClasses, className)} {...props}>
            {children}
        </Component>
    )
}

const Paragraph: React.FC<ParagraphProps> = (
    { 
        children, 
        className,
        size,
        colorScheme, 
        ...props 
    }) => {

    return (
        <p className={cn(
            paragraphVariants({size, colorScheme}), className)} {...props}>
            {children}
        </p>
    )
}


export { Heading, SubHeading, Paragraph };


