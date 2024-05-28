import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

import { Collection } from "@/components/shared/Collections";
import Header from "@/components/shared/Header";
import { getUserImages, getUserRuns } from "@/lib/actions/image.actions";
import { getUserById } from "@/lib/actions/user.actions";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const Profile = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const images = await getUserImages({ page, userId: user._id });
  const runs= await getUserRuns({page, userId: user._id });
  // console.log('runs' , runs)

  return (
    <>
      <Header title="Profile" subtitle=""/>

      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/photo.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{images?.data.length}</h2>
          </div>
        </div>
      </section>
      <div className="py-10">
        <Header title="Last 10 Runs" subtitle=""/>
      </div>
      <section>
      
        <Table>
          <TableCaption>A list of your recent runs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Transformation Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Credit Cost</TableHead>
              {/* <TableHead className="text-right">Amount</TableHead> */}
            </TableRow>
          </TableHeader>
          
            {runs?.data.length > 0 ? (
              <TableBody>                
                {runs?.data.map((run:any) => (
                  <TableRow key={String(run._id)}>
                    <TableCell className="font-medium">{run.transformationType}</TableCell>
                    <TableCell>{run.createdAt}</TableCell>
                    <TableCell>1</TableCell>
                    {/* <TableCell className="text-right">{run.transformationType}</TableCell> */}
                  </TableRow>
                ))} 
              </TableBody>            
            ) : (
              <TableBody>
                <p className="p-20-semibold">Empty List</p>
              </TableBody>
            )}

          {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
        </Table>
      </section>

      <section className="mt-8 md:mt-14">
        <Collection
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  );
};

export default Profile;