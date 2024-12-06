import { personalInfoSchema, PersonalInfoValues } from "@/assets/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormLabel,
    FormItem,
    FormControl,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function PersonalInfoForm(){
    const form = useForm<PersonalInfoValues>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: {
            firstName:"",
            lastName:"",
            jobTitle:"",
            city:"",
            country:"",
            phone:"",
            email:"",
        },
    });
    useEffect(() => {
        const {unsubscribe} = form.watch(async () => {
            const isValid = await form.trigger();
            if(isValid) return;
            //Update Resume Data
        })
        return unsubscribe;
    }, [form])

    return <div className="max-w-xl mx-auto space-y-6">
        <div className="space-y-1.5 text-center">
            <h2 className="text-2xl font-semibold">Personal Info</h2>
            <p className="ext-sm text-muted-foreground"> Tell us about yourself</p>
        </div>
        {/* <FormProvider {...form}> */}
        <Form {...form}>
            <form className="space-y-3">
                <FormField
                control={form.control}
                name="photo"
                render = {({field: {value, ...fieldValues}}) => <FormItem><FormLabel>Your Photo</FormLabel>
                <FormControl>
                    <Input type="file" {...fieldValues} accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files?.[0]
                        fieldValues.onChange(file)
                    }}/>
                </FormControl>
                <FormMessage />
                </FormItem>}/>
                <div className="grid grid-cols-2 gap-3">
                    <FormField 
                    control={form.control}
                    name="firstName"
                    render={({field}) => <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="John"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>}/>

                    <FormField 
                    control={form.control}
                    name="lastName"
                    render={({field}) => <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Doe"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>}/>
                </div>
                <FormField 
                    control={form.control}
                    name="jobTitle"
                    render={({field}) => <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Backend Software Developer"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>}/>

                    <div className="grid grid-cols-2 gap-3">
                    <FormField 
                    control={form.control}
                    name="city"
                    render={({field}) => <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Nairobi"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>}/>

                    <FormField 
                    control={form.control}
                    name="country"
                    render={({field}) => <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Kenya"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>}/>
                </div>
                <FormField 
                    control={form.control}
                    name="phone"
                    render={({field}) => <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                            <Input {...field} type="tel" placeholder="+254 712 345678"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>}/>
                    <FormField 
                    control={form.control}
                    name="email"
                    render={({field}) => <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} type="email" placeholder="johndoe@gmail.com"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>}/>
            </form>
        </Form>
        {/* </FormProvider> */}
            
    </div>
}