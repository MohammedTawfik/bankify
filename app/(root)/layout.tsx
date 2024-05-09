import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = {
    firstName: "John",
    lastName: "Doe",
  };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedInUser} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="Hamburger" width={30} height={30} />
          <div>
            <MobileNav user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
