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

export function CreateWorkspace() {
    const [open, setOpen] = useState(false)
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
                            <p>Crate wordkspace</p>
                        </TooltipContent>
                    </Tooltip>

                    <DialogContent className='sm:max-w-[425px]'>
                        <DialogHeader>
                            <DialogTitle> Create a workdpsace</DialogTitle>
                            <DialogDescription>
                                create a new workspace to get started
                            </DialogDescription>

                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </TooltipProvider>

    );
};

