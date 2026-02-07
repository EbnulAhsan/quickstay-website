'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from './ui/dialog'

export default function BookingForm({ property, total }) {
    const [open, setOpen] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setOpen(true)
    }

    return (
        <>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="block">
                        <span className="text-sm font-medium">Full name</span>
                        <input type="text" name="name" className="mt-1 block w-full rounded-md border px-3 py-2" placeholder="Jane Doe" required />
                    </label>

                    <label className="block">
                        <span className="text-sm font-medium">Email</span>
                        <input type="email" name="email" className="mt-1 block w-full rounded-md border px-3 py-2" placeholder="you@email.com" required />
                    </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="block">
                        <span className="text-sm font-medium">Check-in</span>
                        <input type="date" name="checkin" className="mt-1 block w-full rounded-md border px-3 py-2" required />
                    </label>

                    <label className="block">
                        <span className="text-sm font-medium">Check-out</span>
                        <input type="date" name="checkout" className="mt-1 block w-full rounded-md border px-3 py-2" required />
                    </label>

                    <label className="block">
                        <span className="text-sm font-medium">Guests</span>
                        <input type="number" name="guests" defaultValue={1} min={1} className="mt-1 block w-full rounded-md border px-3 py-2" />
                    </label>
                </div>

                <label className="block">
                    <span className="text-sm font-medium">Special requests</span>
                    <textarea name="notes" rows={3} className="mt-1 block w-full rounded-md border px-3 py-2" placeholder="Any requests or accessibility needs" />
                </label>

                <div className="flex gap-3 items-center">
                    <button type="submit" className="px-5 py-3 bg-primary text-white rounded-lg font-semibold">Confirm &amp; Pay ${total}</button>
                    <Link href="/" className="px-4 py-3 bg-gray-100 rounded-lg">Cancel</Link>
                </div>
            </form>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogTitle>Thank you!</DialogTitle>
                    <DialogDescription>
                        Your booking for <span className="font-semibold">{property.name}</span> has been received.
                    </DialogDescription>

                    <div className="mt-4">
                        <p className="text-sm text-muted-foreground">A confirmation email will be sent shortly.</p>
                        <p className="mt-3 font-semibold">Total charged: ${total}</p>
                    </div>

                    <DialogFooter className="mt-6">
                        <DialogClose asChild>
                            <Link href="/" className="px-4 py-2 bg-primary text-white rounded-md">Back to Home</Link>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
