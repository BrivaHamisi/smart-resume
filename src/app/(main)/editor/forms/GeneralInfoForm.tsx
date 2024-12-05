import { generalInfoSchema, GeneralInfoValues } from "@/assets/lib/validation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    FormField,
    FormLabel,
    FormItem,
    FormControl,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function GeneralInfoForm() {
    const form = useForm<GeneralInfoValues>({
        resolver: zodResolver(generalInfoSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    });

    return (
        <div className="max-w-xl mx-auto space-y-6">
            <div className="space-y-1.5 text-center">
                <h2 className="text-2xl font-semibold">General Info</h2>
                <p className="text-sm text-muted-foreground">
                    This will not appear on your Resume
                </p>
            </div>
            <FormProvider {...form}>
                <form
                    className="space-y-3"
                    onSubmit={form.handleSubmit((data) => {
                        console.log("Form submitted:", data);
                    })}
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="My Cool Resume" autoFocus />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="A Resume for my Next job"/>
                                </FormControl>
                                <FormDescription>Describe what this Resume is for</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Save
                    </button> */}
                </form>
            </FormProvider>
        </div>
    );
}
