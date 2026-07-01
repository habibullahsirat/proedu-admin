export default function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">{title}</p>

          <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>

        <Icon size={40} />
      </div>
    </div>
  );
}
