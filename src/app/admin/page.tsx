import ProductsTable from "../components/admin/ProductsTable";
import LogoutBtn from "../components/admin/LogoutBtn";

const AdminPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between pb-2">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <LogoutBtn />
      </div>
      <ProductsTable />
    </div>
  );
};

export default AdminPage;
