import { useEffect, useState } from "react";
import axios from "../api/axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Admin() {

  const [patients, setPatients] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {

      const [patientRes, analyticsRes] =
        await Promise.all([
          axios.get("/patients"),
          axios.get("/admin/analytics"),
        ]);

      setPatients(patientRes.data);
      setAnalytics(analyticsRes.data);

      setLoading(false);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const markResolved = async (id) => {
    try {
      await axios.put(`/patients/${id}`, {
        status: "Resolved",
      });

      fetchData();

    } catch (err) {
      console.error(err);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center mt-20 text-xl">
        Loading Admin Dashboard...
      </div>
    );

  const chartData = [
    { name: "Total", value: analytics.total },
    { name: "Pending", value: analytics.pending },
    { name: "Resolved", value: analytics.resolved },
    { name: "Today", value: analytics.today },
  ];

  return (
    <div className="p-10 bg-slate-50 min-h-screen">

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-12">

        <Card title="Total Requests" value={analytics.total} />
        <Card title="Pending Cases" value={analytics.pending} />
        <Card title="Resolved Cases" value={analytics.resolved} />
        <Card title="Requests Today" value={analytics.today} />

      </div>

      
      <div className="bg-white p-6 rounded-3xl shadow mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Platform Activity
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>

      </div>

    

      <div className="bg-white rounded-3xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-6">
          Patient Requests
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="border-b">
              <tr className="text-left text-gray-600">
                <th className="py-3">Name</th>
                <th>Issue</th>
                <th>Location</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {patients.map((p) => (
                <tr
                  key={p._id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="py-4 font-medium">
                    {p.name}
                  </td>

                  <td>{p.issue}</td>

                  <td className="text-gray-500">
                    {p.location}
                  </td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        p.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>

                  <td>
                    {p.status !== "Resolved" && (
                      <button
                        onClick={() =>
                          markResolved(p._id)
                        }
                        className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700"
                      >
                        Resolve
                      </button>
                    )}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}



function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition">

      <p className="text-gray-500 mb-2">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-blue-600">
        {value}
      </h2>

    </div>
  );
}
