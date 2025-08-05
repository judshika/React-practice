import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Inputform2() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [m_no, setM_no] = useState("0");
  const [user, setUser] = useState([]);
  const [modaldata, setModaldata] = useState({
    id: "",
    name: "",
    email: "",
    m_no: "",
    description: ""
  });

  const handleName = (e) => setName(e.target.value);
  const handleId = (e) => setId(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleM_no = (e) => setM_no(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, id, email, m_no };

    if (m_no.length !== 10) {
      alert("Check the mobile number");
      return;
    }

    axios
      .post("http://localhost:5000/post3", payload)
      .then(() => {
        update();
      })
      .catch((error) => {
        const content = error.response?.data?.judshika || "Error occurred";
        if (content.includes("Duplicate")) {
          alert("Duplicate found");
        }
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios.delete(`http://localhost:5000/delete/${id}`).then(() => {
        update();
      });
    }
  };

  const handleEdit = (data) => {
    setModaldata(data);
  };

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setModaldata((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/update/${modaldata.id}`, modaldata)
      .then(() => {
        update();
        alert("Updated successfully");
      });
  };

  const update = () => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleName}
                required
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={handleId}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Mobile number"
                value={m_no}
                onChange={handleM_no}
              />
              <br />
              <br />
              <button className="btn btn-danger">Submit</button>
            </form>
          </div>
        </div>

        <div className="col-8">
          <div>
            <h1 className="bg-info text-white mt-3">Database Details</h1>
            <ul>
              {user.map((xyz) => (
                <li key={xyz.id}>{xyz.name}</li>
              ))}
            </ul>
          </div>

          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.map((bio) => (
                <tr key={bio.id}>
                  <td>{bio.name}</td>
                  <td>{bio.email}</td>
                  <td>{bio.m_no}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger me-2"
                      onClick={() => handleDelete(bio.id)}
                    >
                      DELETE
                    </button>
                   

                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleEdit(bio)}
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      EDIT
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group mb-2">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={modaldata.name}
                    onChange={handleModalChange}
                  />
                </div>
                <div className="form-group mb-2">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={modaldata.email}
                    onChange={handleModalChange}
                  />
                </div>
                <div className="form-group mb-2">
                  <label>Mobile Number:</label>
                  <input
                    type="text"
                    name="m_no"
                    className="form-control"
                    value={modaldata.m_no}
                    onChange={handleModalChange}
                  />
                </div>
                <div className="form-group mb-2">
                  <label>Description:</label>
                  <textarea
                    name="description"
                    className="form-control"
                    value={modaldata.description}
                    onChange={handleModalChange}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
                data-bs-dismiss="modal"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inputform2;
