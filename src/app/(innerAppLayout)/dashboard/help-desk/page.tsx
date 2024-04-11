"use client"
 
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"


const HelpDesk = () => {
    
    const FormSchema = z.object({
        category: z
        .string({
            required_error: "Please select a category.",
        })
        .email(),
        problem: z
        .string({
            required_error: "Please select problem encountered.",
        })
        .email(),
        message: z
        .string({
            required_error: "Please type in message.",
        })
        .email(),
    })
   
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    console.log(form);
   
    function onSubmit(data: z.infer<typeof FormSchema>) {

    }
   
    return (
        <div>
            <div className="w-full flex flex-col">
                <h2 className="text-3xl font-bold">Help Desk</h2>
                <p className=" py-2.5 text-base">
                    Please send us a message describing what the issue is and our customer agent will get back to you as quickly as possible. You can also call us at +234 90xxxxxx07.
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 help-desk_form">
                        <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="font-[700]">CATEGORY</FormLabel>
                            <Select onValueChange={field.onChange}  defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="--" className="font-[800] " />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white">
                                    <SelectItem className="hover:bg-[#FCDFC4]" value="Ads">Ads</SelectItem>
                                    <SelectItem className="hover:bg-[#FCDFC4]" value="Buying & Selling">Buying & Selling</SelectItem>
                                    <SelectItem className="hover:bg-[#FCDFC4]" value="Subscriptions">Subscriptions</SelectItem> 
                                    <SelectItem className="hover:bg-[#FCDFC4]" value="Agents">Agents</SelectItem>
                                    <SelectItem className="hover:bg-[#FCDFC4]" value="others">{'--Others (please type the issue in the message box below)'}</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="problem"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="font-[700]">PROBLEM ENCOUNTERED</FormLabel>
                            <Select onValueChange={field.onChange}  defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="--" className="font-[800] " />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white">
                                    <SelectItem className="hover:bg-[#FCDFC4]" value="Subscription problem">Subscription problem</SelectItem>
                                    <SelectItem className="hover:bg-[#FCDFC4]" value="No agent available">No agent available</SelectItem>
                                    <SelectItem className="hover:bg-[#FCDFC4]" value="Users not interacting and clicking advertisements">Users not interacting and clicking advertisements</SelectItem>
                                    <SelectItem className="hover:bg-[#FCDFC4]" value="Ads not showing">Ads not showing</SelectItem>
                                    <SelectItem className="hover:bg-[#FCDFC4]" value="others">{'--Others (please type the issue in the message box below)'}</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>MESSAGE</FormLabel>
                                <FormControl>
                                    <Textarea
                                    placeholder="Tell us a what you need help with"
                                    className="resize-none"
                                    rows={15}
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />    
                        <div className="flex w-full justify-end">
                            <Button type="submit" className="!bg-primary text-white px-[56px] py-[8px] rounded-lg ">Send Message</Button>
                        </div>                    
                    </form>
                </Form>

            </div>

        </div>
    )
}

export default HelpDesk