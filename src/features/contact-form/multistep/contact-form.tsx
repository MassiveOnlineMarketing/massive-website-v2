'use client'

import React, { useState, useEffect } from 'react'

// form validation
import { useForm, SubmitHandler } from "react-hook-form";
import { UseFormRegister, FieldValues, DeepMap, FieldError } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { formSchema } from '@/lib/data-schema/form';

import { EnvelopeIcon } from "@heroicons/react/24/outline";

// actions
import { submitForm } from '@/lib/actions/submit-form';
import { cn } from "@/lib/utils"

// components
import { Heading, Paragraph, SubHeading } from '@/components/ui/typography/typography'
import { Button } from '@/components/ui/button';

// form steps
import { WebDesignStep } from './WebDesign';
import { ContactStep } from './Contact';
import { TestInput } from '@/components/ui/input/fields';
import { EcommerceStep } from './Ecommerce';
import { SEOStep } from './SEO';
import { SEAStep } from './SEA';
import { StrategieStep } from './Strategie';
import { ModalContext } from '@/features/modal/FullScreenModal';
import { GreenCheckmarkRound } from '@/assets/icons';
import { constants } from '@/styles/styles';
import Image from 'next/image';

type Inputs = z.infer<typeof formSchema>;

type MultiStepContactForm = {
    className?: string,
}

export type MultiStepContactFormChildProps = {
    register: UseFormRegister<FieldValues>;
    watch: (fieldName: string) => any;
    errors: DeepMap<FieldValues, FieldError>;
};

export const MultiStepContactForm: React.FC<MultiStepContactForm> = ({ className }) => {
    // set state data
    const [data, setData] = useState<Inputs>();

    // get modal context
    const modalContext = React.useContext(ModalContext);
    if (!modalContext) {
        throw new Error("ModalContext is null. Make sure you're using the context inside a ModalContext.Provider");
    }

    const { setIsVisible } = modalContext;


    // destructure helper functions from Zod
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    // store the website url 
    const websiteURL = watch('websiteURL');



    // Handling the next step
    const [currentStep, setCurrentStep] = useState("step1");
    const [stepHistory, setStepHistory] = useState<string[]>([]);
    const dienst = watch('dienst');

    const nextStep = () => {
        setStepHistory(prev => [...prev, currentStep]);

        switch (currentStep) {
            case "step1":
                switch (dienst) {
                    case "Web Design & Development":
                        setCurrentStep("Web Design & Development");
                        break;
                    case "eCommerce en Webwinkel oplossingen":
                        setCurrentStep("eCommerce en Webwinkel oplossingen");
                        break;
                    case "SEO (Zoekmachineoptimalizatie)":
                        setCurrentStep("SEO (Zoekmachineoptimalizatie)");
                        break;
                    case "Advertentie beheer":
                        setCurrentStep("Advertentie beheer");
                        break;
                    case "Online strategie ontwikkeling":
                        setCurrentStep("Online strategie ontwikkeling");
                        break;
                    case "Geen van de bovenstaande":
                        setCurrentStep("contactDetails");
                        break;
                    default:
                        setCurrentStep("contactDetails");
                        break;
                }
                break;
            case "Web Design & Development":
            case "eCommerce en Webwinkel oplossingen":
            case "SEO (Zoekmachineoptimalizatie)":
            case "Advertentie beheer":
            case "Online strategie ontwikkeling":
            case "Geen van de bovenstaande":
                setCurrentStep("contactDetails");
                break;
            default:
                setCurrentStep("step2");
                break;
        }
    };
    console.log(currentStep);

    const prevStep = () => {
        // Pop the last step from the history
        const lastStep = stepHistory[stepHistory.length - 1];

        // Remove the last step from the history
        setStepHistory(prev => prev.slice(0, -1));

        // Set the last step as the current step
        setCurrentStep(lastStep);
    };

    // skip to contact details
    const skipToContactDetails = () => {
        setCurrentStep("contactDetails");
    };


    // handling the form submit
    const processForm: SubmitHandler<Inputs> = async data => {
        console.log('submitting form')
        const result = await submitForm(data);

        if (!result) {
            console.log('something went wrong')
            return;
        }

        if (result.error) {
            console.log(result.error)
            return;
        }

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            reset();
            setIsVisible(false);

        } catch (error) {

        }

        setData(data);
        // handleClose(); 
    };


    return (
        <div className={cn(
            className,
            'h-full w-full',
            'grid md:grid-cols-3  xl:grid-cols-2 '
        )}>
            <div className="md:flex hidden bg-[url('/home/contact-modal-image.jpg')] h-full bg-cover justify-center items-center ">
                <div className={`p-2 ${constants.glassFill2} w-fit h-fit rounded-2xl`}>
                    <div className={`pb-8 px-6 pt-6 ${constants.glassFill} ${constants.glassStroke} shadow-md w-fit h-fit rounded-2xl`}>

                        <div className='flex gap-4 items-center'>
                            <Image src='/contact-logo.jpg' width={60} height={60} alt='contact logo' />
                            <div>
                                <SubHeading level='h4' size='sm' colorScheme='gradient-primary'>Start vandaag met</SubHeading>
                                <Heading level='h5' size='3xl'>Massive Online Marketing</Heading>
                            </div>
                        </div>

                        <ul className='mt-8'>
                            {MODAL_LEFT_SIDE.map((item) => (
                                <li key={item} className='flex gap-2 items-center mt-2'>
                                    <GreenCheckmarkRound />
                                    <Paragraph>{item}</Paragraph>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

            </div>

            <div className='md:col-span-2 xl:col-span-1 overflow-y-scroll'>
                <div className='flex gap-6 mb-auto p-4'>
                    <Button variant='outline' className=' md:ml-auto mr-16' onClick={skipToContactDetails}><EnvelopeIcon className='h-5 w-5' />Direct contact</Button>
                    {/* {children} */}
                </div>

                <form
                    onSubmit={handleSubmit(processForm)}
                    className=' max-w-[440px] mx-auto lg:mr-0 lg:ml-[15%] p-4 '
                >
                    {/* STEP ONE */}
                    {currentStep === "step1" &&
                        <>
                            <p className='font-semibold text-[#4B5563]'>1/3</p>
                            <Heading level='h3' size='xl' colorScheme='accent' className='mb-8'>In welke Dienst bent u geïnteresseerd?</Heading>
                            {/* <RadioGroup data={DIENSTEN_OPTIES} register={register} registerType="dienst" /> */}
                            <div className='flex flex-col gap-3'>
                                {DIENSTEN_OPTIES.map((option, index) => (
                                    <TestInput
                                        key={index}
                                        type='radio'
                                        label={option.option}
                                        value={option.option}
                                        {...register('dienst')}
                                    />
                                ))}
                            </div>
                            <Button type='button' size='lg' variant='primary' className='w-full mt-12' onClick={nextStep}>Volgende</Button>
                        </>
                    }

                    {/* web dev */}
                    {currentStep === "Web Design & Development" &&
                        <>
                            <p className='font-semibold text-[#4B5563]'>2/3</p>
                            <Heading level='h3' size='xl' colorScheme='accent' className='mb-8'>Web Design & Development</Heading>
                            <WebDesignStep register={register} watch={watch} errors={errors} />
                            <div className='inline-flex gap-6 mt-12 w-full'>
                                <Button type='button' variant='outline' className="px-12 py-3" onClick={prevStep}>Terug</Button>
                                <Button type='button' variant='primary' className="w-full py-3" onClick={nextStep}>Volgende</Button>
                            </div>
                        </>
                    }


                    {/* ECOMM STEP TWO */}
                    {currentStep === "eCommerce en Webwinkel oplossingen" &&
                        <>
                            <p className='font-semibold text-[#4B5563]'>2/3</p>
                            <Heading level='h3' size='xl' colorScheme='accent' className='mb-8'>Webwinkel</Heading>
                            <EcommerceStep register={register} watch={watch} errors={errors} />
                            <div className='inline-flex gap-6 mt-12 w-full'>
                                <Button type='button' variant='outline' className="px-12 py-3" onClick={prevStep}>Terug</Button>
                                <Button type='button' variant='primary' className="w-full py-3" onClick={nextStep}>Volgende</Button>
                            </div>
                        </>
                    }


                    {/* SEO STEP TWO */}
                    {currentStep === "SEO (Zoekmachineoptimalizatie)" &&
                        <>
                            <p className='font-semibold text-[#4B5563]'>2/3</p>
                            <Heading level='h3' size='xl' colorScheme='accent' className='mb-8'>Zoekmachine optimalizatie</Heading>
                            <SEOStep register={register} watch={watch} errors={errors} />
                            <div className='inline-flex gap-6 mt-12 w-full'>
                                <Button type='button' variant='outline' className="px-12 py-3" onClick={prevStep}>Terug</Button>
                                <Button type='button' variant='primary' className="w-full py-3" onClick={nextStep}>Volgende</Button>
                            </div>
                        </>
                    }


                    {/* SEA STEP TWO */}
                    {currentStep === "Advertentie beheer" &&
                        <>
                            <p className='font-semibold text-[#4B5563]'>2/3</p>
                            <Heading level='h3' size='xl' colorScheme='accent' className='mb-8'>Advertentiebeheer</Heading>
                            <SEAStep register={register} watch={watch} errors={errors} />
                            <div className='inline-flex gap-6 mt-12 w-full'>
                                <Button type='button' variant='outline' className="px-12 py-3" onClick={prevStep}>Terug</Button>
                                <Button type='button' variant='primary' className="w-full py-3" onClick={nextStep}>Volgende</Button>
                            </div>
                        </>
                    }


                    {/* STRATEGY STEP TWO */}
                    {currentStep === "Online strategie ontwikkeling" &&
                        <>
                            <p className='font-semibold text-[#4B5563]'>2/3</p>
                            <Heading level='h3' size='xl' colorScheme='accent' className='mb-8'>Online strategie ontwikkeling</Heading>
                            <StrategieStep register={register} watch={watch} errors={errors} />
                            <div className='inline-flex gap-6 mt-12 w-full'>
                                <Button type='button' variant='outline' className="px-12 py-3" onClick={prevStep}>Terug</Button>
                                <Button type='button' variant='primary' className="w-full py-3" onClick={nextStep}>Volgende</Button>
                            </div>
                        </>
                    }


                    {/* STEP THREE */}
                    {currentStep === "contactDetails" &&
                        <>
                            <p className='font-semibold text-[#4B5563]'>3/3</p>
                            <Heading level='h3' size='xl' colorScheme='accent' className='mb-8'>Contact Gegevens</Heading>
                            <ContactStep register={register} watch={watch} errors={errors} websiteURL={websiteURL || ''} />
                            <div className='inline-flex gap-6 mt-12 w-full'>
                                <Button type='button' variant='outline' className="px-12 py-3" onClick={prevStep}>Terug</Button>
                                <Button type='submit' variant='primary' className="w-full py-3" disabled={isSubmitting} >Versturen</Button>
                            </div>
                        </>
                    }

                </form>
            </div>

            {/* <div className=''>
                <pre>
                    {data && JSON.stringify(data, null, 2)}
                </pre>
            </div> */}

        </div>
    )
}



const DIENSTEN_OPTIES = [
    { option: 'Web Design & Development' },
    { option: 'eCommerce en Webwinkel oplossingen' },
    { option: 'SEO (Zoekmachineoptimalizatie)' },
    { option: 'Advertentie beheer' },
    { option: 'Online strategie ontwikkeling' },
    { option: 'Geen van de bovenstaande' }
]


const MODAL_LEFT_SIDE = [
    'Gratis Consultancy',
    "Op Maat Gemaakt Advies",
    "Ontdek uw Digitaal Potentieel",
    "Langdurige Partnerschappen",
    "All-in-One Online Marketing Bureau"
]
