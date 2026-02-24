'use client'
import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {workSpaceSchema} from "@/app/schemas/workspace";

export function CreateWorkspace() {
    const [open, setOpen] = useState(false)
//define your form
    const form = useForm({
        resolver: zodResolver(workSpaceSchema),
        defaultValues: {
            name: "",
        },
    })

    function onSubmit() {
        console.log('data')
    }

    return (
        <TooltipProvider>
            <div>
                <Dialog open={open} onOpenChange={setOpen}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <DialogTrigger asChild>
                                <Button variant='ghost' size='icon'
                                        className='size-12 rounded-xl border-2 border-dashed border-muted-foreground/50 text-muted-foreground hover:border-muted-foreground hover:text-foreground hover:rounded-lg transition-all duration-200 '>
                                    <Plus className="size-5"/>
                                </Button>
                            </DialogTrigger>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            <p>Crate workspace</p>
                        </TooltipContent>
                    </Tooltip>

                    <DialogContent className='sm:max-w-[425px]'>
                        <DialogHeader>
                            <DialogTitle> Create a workdpsace</DialogTitle>
                            <DialogDescription>
                                create a new workspace to get started
                            </DialogDescription>

                        </DialogHeader>
                        <Form {...form}>
                            <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField control={form.control} name="name" render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder='my workspace' {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}/>
                                <Button type='submit'>Create Workspace</Button>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </div>
        </TooltipProvider>
    );
};

