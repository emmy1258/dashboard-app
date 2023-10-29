import { useParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashbordLayout";
import FormEditProduct from "../components/FormEditProduct";

export default function EditProduct() {
  const { id } = useParams();
  return (
    <DashboardLayout>
      <div className="w-full flex justify-center items-center flex-col px-0 md:px-12">
        <h1 className="text-xl text-center pb-12 text-gray-900 font-semibold capitalize">
          Edit your product
        </h1>
        <div className="md:w-1/2 w-full bg-white p-5 shadow-md rounded-md">
          <FormEditProduct id={id} />
        </div>
      </div>
    </DashboardLayout>
  );
}
