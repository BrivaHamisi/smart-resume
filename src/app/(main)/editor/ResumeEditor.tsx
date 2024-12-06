"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
// import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import Breadcrumbs from "./Breadcrumbs";

export default function ResumeEditor() {
    const searchParams = useSearchParams();

    const currentStep = searchParams.get("step") || steps[0].key;

    function setStep(key:string) {
        const newSearchparams = new URLSearchParams(searchParams);
        newSearchparams.set("step", key);
        window.history.pushState(null, "", `?${newSearchparams.toString()}`);
    }

    const FormComponent = steps.find(
        step => step.key === currentStep
    )?.component;

    return ( // Make sure to return the JSX
        <div className="flex grow flex-col">
            <header className="space-y-1.5 border-b px-3 py-5 text-center">
                <h1 className="text-2xl">Design Your Resume</h1>
                <p className="text-sm text-muted-foreground">
                    Follow the Steps below to create your resume. Your progress will be saved automatically
                </p>
            </header>
            <main className="relative grow">
                <div className="absolute bottom-0 top-0 flex w-full">
                    {/* <div className="w-full p-3 md:w-1/2"> */}
                    <div className="w-full p-3 md:w-1/2 overflow-y-auto space-y-6">
                    {/* <GeneralInfoForm/> */}
                    {/* <PersonalInfoForm/> */}
                    <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep}/>
                    {FormComponent && <FormComponent/>}
                    </div>
                    <div className="grow md:border-r"/>
                    <div className="hidden w-1/2 md:flex">
                    Right
                    </div>
                </div>
            </main>
            <footer className="w-full border-t px-3 py-5">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <Button variant="secondary"> Previous Step</Button>
                        <Button> Next Step</Button>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="secondary" asChild>
                            <Link href="/resumes">Close</Link>
                        </Button>
                        <p className="text-muted-foreground opacity-0">Saving...</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}