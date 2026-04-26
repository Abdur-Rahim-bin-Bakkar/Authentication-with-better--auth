'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const handleSignOut = async () => {
        await authClient.signOut()
    }
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    console.log(session?.user?.name)
    return (
        <div className='flex justify-between items-center shadow h-12 px-3'>
            <h1>Logo</h1>
            <div className="flex gap-3">

                <Link href={'auth/signup'}>Sign up</Link>
            </div>

            <div className="flex gap-2 items-center">


                
                 {isPending? <p>loading</p>:  session?.user?.name}
                {
                    session?.user?.name ? <Button onClick={handleSignOut} className=' bg-red-300'>Logout</Button> : <Link href={'auth/signin'}>Sign IN</Link>
                }



            </div>
        </div >
    );
};

export default Navbar;