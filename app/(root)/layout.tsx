import Sidebar from "@/components/Sidebar";

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
      {children}
    </main>
  );
}
