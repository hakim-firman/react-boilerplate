import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Label } from '@/components/ui/label'
  import { Input } from '@/components/ui/input'
import { Button } from './ui/button'

const WelcomeModal = ({isDialogOpen,setIsDialogOpen}) => {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        
        <DialogContent>
        <DialogHeader>
            <DialogTitle>Welcome to the Cave!👋</DialogTitle>
            
            <DialogDescription>
            Please introduce yourself, mate.
            </DialogDescription>
        </DialogHeader>
            <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                    <Label htmlFor="name" className="sr-only">
                    Your Name
                    </Label>
                    <Input
                    id="name"
                    placeholder="Your Name"
                    />
                </div>
                <Button type="submit"  size="sm" className="px-3 brutalism brutalism-active">
                    Save
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default WelcomeModal