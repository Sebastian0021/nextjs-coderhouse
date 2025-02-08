import ProductsTable from "../components/admin/ProductsTable";

const AdminPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <ProductsTable />
    </div>
  );
};

export default AdminPage;
