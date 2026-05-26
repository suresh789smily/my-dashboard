import React, { useState } from 'react';

function DailyUpdates() {

  const [employeeName, setEmployeeName] = useState("");
  const [date, setDate] = useState("");
  const [project, setProject] = useState("");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");

  const [report, setReport] = useState([]);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      employeeName === "" ||
      date === "" ||
      project === "" ||
      task === "" ||
      status === ""
    ) {

      alert("Please fill all fields");

    } else {

      const newData = {
        employeeName,
        date,
        project,
        task,
        status
      };

      setReport([...report, newData]);

      alert("Daily Update Submitted Successfully");

      setEmployeeName("");
      setDate("");
      setProject("");
      setTask("");
      setStatus("");
    }
  };

  const deleteRow = (index) => {

    const updatedData = report.filter(
      (item, i) => i !== index
    );

    setReport(updatedData);
  };

  return (

    <div
      className="daily-container"
      id="dailyupdates"
      style={{

        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"

      }}
    >

      <h1>Daily Updates Management</h1>

      {/* Form */}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) =>
            setEmployeeName(e.target.value)
          }
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Project Name"
          value={project}
          onChange={(e) =>
            setProject(e.target.value)
          }
        />

        <textarea
          placeholder="Daily Task Update"
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
        ></textarea>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >

          <option value="">
            Select Status
          </option>

          <option value="Completed">
            Completed
          </option>

          <option value="In Progress">
            In Progress
          </option>

          <option value="Pending">
            Pending
          </option>

        </select>

        <button type="submit">
          Submit Daily Update
        </button>

      </form>

      {/* Table */}

      <table>

        <thead>

          <tr>

            <th>Employee</th>
            <th>Date</th>
            <th>Project</th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {
            report.map((item, index) => (

              <tr key={index}>

                <td>{item.employeeName}</td>

                <td>{item.date}</td>

                <td>{item.project}</td>

                <td>{item.task}</td>

                <td>{item.status}</td>

                <td>

                  <button
                    onClick={() => deleteRow(index)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  );
}

export default DailyUpdates;