export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold text-primary">
        {value}
      </h2>
    </div>
  );
}
