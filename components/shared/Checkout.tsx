"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { useToast } from "@/components/ui/use-toast";
import { createTransaction } from "@/lib/actions/transaction.action";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Checkout = ({
    stripeId,
    amount,
    credits,
    plan,
    buyerId,
    createdAt
}: {
    stripeId: string;
    amount: number;
    credits: number;
    plan: string;
    buyerId: string;
    createdAt: Date;
}) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter()

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast({
        title: "Order placed!",
        description: "You will receive an email confirmation",
        duration: 5000,
        className: "success-toast",
      });
    }

    if (query.get("canceled")) {
      toast({
        title: "Order canceled!",
        description: "Continue to shop around and checkout when you're ready",
        duration: 5000,
        className: "error-toast",
      });
    }
  }, [toast]);

  const onCheckout = async () => {
    const transaction = {
        stripeId,
        amount,
        credits,
        plan,
        buyerId,
        createdAt
    };

    await createTransaction(transaction);
    
    router.push('/profile')
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-full button-gradient bg-cover"
      >
        Buy Credit
      </Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="px-4 py-5 sm:p-6">
            <Dialog.Title className="text-lg leading-6 font-medium text-gray-900">
              Confirm Purchase
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                This action will add 20 credits to your account at no cost. 
                Please use it with caution, as misuse may incur costs to the developer.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
              <Button
                onClick={onCheckout}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 button-gradient text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
              >
                Confirm
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Checkout;
