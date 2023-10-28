import FormAddProduct from "../components/FormAddProduct";
import DashboardLayout from "../layouts/DashbordLayout";

export default function AddProductPage() {
  return (
    <DashboardLayout>
      <div className="w-full flex justify-center items-center flex-col px-0 md:px-12">
        <h1 className="text-xl text-center pb-12 text-gray-900 font-bold">
          Add new product
        </h1>
        <div className="md:w-1/2 w-full bg-white p-5 shadow-md rounded-md">
          <FormAddProduct />
        </div>
      </div>
    </DashboardLayout>
  );
}
