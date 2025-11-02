"use client";

import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackDescription,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackNext,
  DialogStackOverlay,
  DialogStackPrevious,
  DialogStackTitle,
  DialogStackTrigger,
} from "@/lib/docs/ui/dialog-stack";

const DialogStackDemo = () => (
  <DialogStack>
    <DialogStackTrigger asChild>
      <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
        Show me
      </button>
    </DialogStackTrigger>
    <DialogStackOverlay />

    <DialogStackBody>
      <DialogStackContent>
        <DialogStackHeader>
          <DialogStackTitle>I'm the first dialog</DialogStackTitle>
          <DialogStackDescription>
            With a fancy description
          </DialogStackDescription>
        </DialogStackHeader>
        <DialogStackFooter className="justify-end">
          <DialogStackNext asChild>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
              Next
            </button>
          </DialogStackNext>
        </DialogStackFooter>
      </DialogStackContent>

      <DialogStackContent>
        <DialogStackHeader>
          <DialogStackTitle>I'm the second dialog</DialogStackTitle>
          <DialogStackDescription>
            With a fancy description
          </DialogStackDescription>
        </DialogStackHeader>
        <DialogStackFooter className="justify-between">
          <DialogStackPrevious asChild>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
              Previous
            </button>
          </DialogStackPrevious>
          <DialogStackNext asChild>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
              Next
            </button>
          </DialogStackNext>
        </DialogStackFooter>
      </DialogStackContent>

      <DialogStackContent>
        <DialogStackHeader>
          <DialogStackTitle>I'm the third dialog</DialogStackTitle>
          <DialogStackDescription>
            With a fancy description
          </DialogStackDescription>
        </DialogStackHeader>
        <DialogStackFooter className="justify-between">
          <DialogStackPrevious asChild>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
              Previous
            </button>
          </DialogStackPrevious>
        </DialogStackFooter>
      </DialogStackContent>
    </DialogStackBody>
  </DialogStack>
);

export default DialogStackDemo;
