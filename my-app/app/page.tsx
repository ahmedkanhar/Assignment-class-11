import ParentComponent from "@/components/ParentComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div>
      <Navbar/>
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to My Car Collection</h1>

      <ParentComponent />
      
    </main>
    <Footer/>
    </div>
  );
};

export default Page;
