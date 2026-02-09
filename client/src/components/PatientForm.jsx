import { useState } from "react";
import axios from "../api/axios";
import toast from "react-hot-toast";

export default function PatientForm() {

  const [data, setData] = useState({
    name: "",
    issue: "",
    location: "",
  });

  const [loading,setLoading] = useState(false);

  const submit = async (e) => {

    e.preventDefault();

    try{
      setLoading(true);

      await axios.post("/patients", data);

      toast.success("Support request submitted!");

      setData({
        name:"",
        issue:"",
        location:"",
      });

    }catch(err){
      toast.error("Submission failed");
    }

    setLoading(false);
  };

  return (
    <div className="
      min-h-screen flex items-center justify-center
      bg-slate-950
      p-6
    ">
      <div className="
        w-full max-w-2xl
        bg-slate-900
        border border-slate-800
        shadow-2xl
        rounded-3xl
        p-10
        text-gray-200
      ">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Request Healthcare Support
        </h2>

        <form className="space-y-5" onSubmit={submit}>

          <input
            required
            autoFocus
            placeholder="Your Name"
            value={data.name}
            onChange={(e)=>
              setData({...data,name:e.target.value})
            }
            className="
              w-full bg-slate-800
              border border-slate-700
              focus:border-blue-500
              outline-none
              p-3 rounded-xl
            "
          />

          <textarea
            required
            rows="4"
            placeholder="Describe your issue..."
            value={data.issue}
            onChange={(e)=>
              setData({...data,issue:e.target.value})
            }
            className="
              w-full bg-slate-800
              border border-slate-700
              focus:border-blue-500
              outline-none
              p-3 rounded-xl
            "
          />

          <input
            required
            placeholder="Location"
            value={data.location}
            onChange={(e)=>
              setData({...data,location:e.target.value})
            }
            className="
              w-full bg-slate-800
              border border-slate-700
              focus:border-blue-500
              outline-none
              p-3 rounded-xl
            "
          />

          <button
            disabled={loading}
            className="
              w-full bg-blue-600 hover:bg-blue-700
              p-3 rounded-xl font-semibold
              transition
              disabled:opacity-60
            "
          >
            {loading ? "Submitting..." : "Get Support"}
          </button>

        </form>
      </div>
    </div>
  );
}
