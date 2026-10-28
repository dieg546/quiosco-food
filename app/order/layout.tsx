import SideBar from "@/components/order/SideBar"
import Summary from "@/components/order/Summary";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
        <div className=" flex justify-between">
            <SideBar/> 

            <main className="md:h-screen md:overflow-y-scroll md:flex-1">

                {children}

            </main>

            <Summary/>
        </div>
        

    </>
  );
}