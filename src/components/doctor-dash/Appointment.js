import { Link } from 'react-router-dom';

const Appointment = () => {
  const patients = [
    {
      name:"Pankaj Kumar",
      age:25,
      img:"",
      gender:"Male",
      department:"Cardilogy",
      date:"20th Dec 2020",
      time:"11:00 AM",
      doctorName:"Dr.Calvin Kumar",
      docImage:"",
      fees:"50$/Patient"
    },
  ]
  return (
    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
      <div className="row">
        <div className="col-xl-9 col-lg-6 col-md-4">
          <h5 className="mb-0">Appointment</h5>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
          <div className="justify-content-md-end">
            <form>
              <div className="row justify-content-between align-items-center">
                <div className="col-sm-12 col-md-5">
                  <div className="mb-0 position-relative">
                    <select className="form-select form-control">
                      <option value="EY">Today</option>
                      <option value="GY">Tomorrow</option>
                      <option value="PS">Yesterday</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
                  <div className="d-grid">
                    <Link to="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#appointmentform">Appointment</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-4">
          <div className="table-responsive bg-white shadow rounded">
            <table className="table mb-0 table-center">
              <thead>
                <tr>
                  <th className="border-bottom p-3" style={{ minWidth: '50px' }}>#</th>
                  <th className="border-bottom p-3" style={{ minWidth: '180px' }}>Name</th>
                  <th className="border-bottom p-3">Age</th>
                  <th className="border-bottom p-3">Gender</th>
                  <th className="border-bottom p-3">Department</th>
                  <th className="border-bottom p-3" style={{ minWidth: '150px' }}>Date</th>
                  <th className="border-bottom p-3">Time</th>
                  <th className="border-bottom p-3" style={{ minWidth: '220px' }}>Doctor</th>
                  <th className="border-bottom p-3">Fees</th>
                  <th className="border-bottom p-3" style={{ minWidth: '150px' }}></th>
                </tr>
              </thead>
              <tbody>
                {patients!==0 ? (<>
                {patients.map((patient,i)=>{
                  return(
                    <tr key={i}>
                  <th className="p-3">{i}</th>
                  <td className="p-3">
                    <Link to="#" className="text-dark">
                      <div className="d-flex align-items-center">
                        <img src="../assets/images/client/01.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="" style={{ height: '40px', width: '40px' }} />
                        <span className="ms-2">{patient.name}</span>
                      </div>
                    </Link>
                  </td>
                  <td className="p-3">{patient.age}</td>
                  <td className="p-3">{patient.gender}</td>
                  <td className="p-3">{patient.department}</td>
                  <td className="p-3">{patient.date}</td>
                  <td className="p-3">{patient.time}</td>
                  <td className="p-3">
                    <Link to="#" className="text-dark">
                      <div className="d-flex align-items-center">
                        <img src="../assets/images/doctors/01.jpg" className="avatar avatar-md-sm rounded-circle border shadow" alt="" style={{ height: '40px', width: '40px' }} />
                        <span className="ms-2">{patient.docName}</span>
                      </div>
                    </Link>
                  </td>
                  <td className="p-3">{patient.fees}</td>
                  <td className="text-end p-3">
                    <Link to="#" className="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewappointment"><i className="uil uil-eye"></i></Link>
                    <Link to="#" className="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#acceptappointment"><i className="uil uil-check-circle"></i></Link>
                    <Link to="#" className="btn btn-icon btn-pills btn-soft-danger" data-bs-toggle="modal" data-bs-target="#cancelappointment"><i className="uil uil-times-circle"></i></Link>
                  </td>
                </tr>
                  )
                })}
                </>):(<></>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

