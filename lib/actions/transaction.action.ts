"use server"

import Transaction from "../database/models/transaction.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import { updateCredits } from "./user.actions";

// export async function checkoutCredits(transaction: CheckoutTransactionParams){

//     const amount = Number(transaction.amount) * 100;

//     const session = await sessions.create

// }

export async  function createTransaction (transaction: CreateTransactionParams){
    try {
        await connectToDatabase()

        const newTransaction = await Transaction.create({
            ...transaction, buyer: transaction.buyerId
        })

        await updateCredits(transaction.buyerId, transaction.credits)

        return JSON.parse(JSON.stringify(newTransaction))


    } catch (error) {
        handleError(error)
    }
}