import React, { useEffect } from 'react'
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
import { useAppContext } from '@/context/AppContext'

const WelcomeModal = ({isDialogOpen,setIsDialogOpen}) => {
    const {user,setUser}=useAppContext()
    const [input, setInput] = React.useState({
        name: '',
    })
    const handleInput = (e)=>{
        setInput({ ...input, name: e.target.value })
    }
    const handleSubmit = ()=>{
        setUser(input.name)
        setIsDialogOpen(false)
    }
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
                    onChange={(e)=>handleInput(e)}
                    />
                </div>
                <Button type="submit" onClick={handleSubmit}  size="sm" className="px-3 brutalism brutalism-active">
                    Save
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default WelcomeModal