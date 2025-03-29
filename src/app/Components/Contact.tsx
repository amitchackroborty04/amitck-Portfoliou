"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define the form schema with Zod
const formSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phoneNumber: z.string().regex(/^\+?[0-9\s\-()]{7,}$/, { message: "Please enter a valid phone number." }),
    topic: z.string().min(1, { message: "Please select a topic." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
    acceptTerms: z.boolean().refine((val) => val === true, { message: "You must accept the terms." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Initialize the form with react-hook-form and zod resolver
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            topic: "",
            message: "",
            acceptTerms: false,
        },
    });

    // Handle form submission
    function onSubmit(data: FormValues) {
        setIsSubmitting(true);

        console.log("Form data submitted:", data);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            setTimeout(() => setIsSuccess(false), 3000);

            form.reset();
        }, 1000);
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-black p-4">
            <div className="w-full max-w-3xl space-y-6">
                <div className="text-center">
                    <p className="text-sm text-purple-400">Get in Touch</p>
                    <h1 className="mt-2 text-4xl font-bold text-purple-300 md:text-5xl">Contact me</h1>
                    <p className="mt-4 text-purple-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {isSuccess && (
                    <div className="rounded-md bg-green-500/20 p-4 text-center text-green-400">
                        Thank you! Your message has been sent successfully.
                    </div>
                )}

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-purple-400">First name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="First name"
                                                {...field}
                                                className="border-purple-700 bg-transparent text-white focus-visible:ring-purple-500"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-purple-400">Last name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Last name"
                                                {...field}
                                                className="border-purple-700 bg-transparent text-white focus-visible:ring-purple-500"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-purple-400">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email address"
                                                type="email"
                                                {...field}
                                                className="border-purple-700 bg-transparent text-white focus-visible:ring-purple-500"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-purple-400">Phone number</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Phone number"
                                                type="tel"
                                                {...field}
                                                className="border-purple-700 bg-transparent text-white focus-visible:ring-purple-500"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="topic"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-purple-400">Choose a topic</FormLabel>
                                    <Controller
                                        control={form.control}
                                        name="topic"
                                        render={({ field }) => (
                                            <Select onValueChange={(val) => field.onChange(val)} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="border-purple-700 bg-transparent text-white focus:ring-purple-500">
                                                        <SelectValue placeholder="Select one..." />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="bg-gray-900 text-white">
                                                    <SelectItem value="general">General Inquiry</SelectItem>
                                                    <SelectItem value="support">Technical Support</SelectItem>
                                                    <SelectItem value="feedback">Feedback</SelectItem>
                                                    <SelectItem value="partnership">Partnership</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-purple-400">Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Type your message..."
                                            {...field}
                                            className="min-h-[150px] border-purple-700 bg-transparent text-white focus-visible:ring-purple-500"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="acceptTerms"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={(checked) => field.onChange(!!checked)} />
                                    </FormControl>
                                    <FormLabel className="text-purple-400">I accept the terms</FormLabel>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-center">
                            <Button type="submit" disabled={isSubmitting} className="bg-purple-600 px-8 py-2 text-white hover:bg-purple-700">
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
