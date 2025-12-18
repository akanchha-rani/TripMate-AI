"use client";
import React, { use, useContext, useEffect, useState } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";
import { TripDetailContext, TripDetailContextType } from "@/context/TripDetailContext";
import { TripInfo } from "./create-new-trip/_components/ChatBox";
import Footer from "./_components/Footer";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CreateUser = useMutation(api.user.CreateNewUser);
  const [userDetail, setUserDetail] = useState<any>();
  const [tripDetailInfo,setTripDetailInfo]=useState<TripInfo | null> (null) ;
  
  const { user } = useUser();

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  const CreateNewUser = async () => {
    if (user) {
      const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user?.imageUrl,
        name: user?.fullName ?? "",
      });
      setUserDetail(result);
    }
  };

  
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <TripDetailContext.Provider value={{ tripDetailInfo,setTripDetailInfo }}>
        <div>
          <Header />
          {children}
          <Footer/>
        </div>
      </TripDetailContext.Provider>
    </UserDetailContext.Provider>
  );
}

export default Provider;

export const useUserDetailContext = () => {
  return useContext(UserDetailContext);
};

export const useTripDetailContext = (): TripDetailContextType | undefined => {
  return useContext(TripDetailContext);
}
