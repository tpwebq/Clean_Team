

function ServicesS2(){
    return(
        <section className="services-s2 minh-75vh container-fluid d-flex align-items-start py-5">
            <div className="row w-100 mx-0 mt-5">
                <div className="col-12 col-md-4 col-lg-3">
                    <div className="card shadow mb-3">
                        <div className="card-header">
                            <h6 className="text-secondary mb-0 d-inline-block">
                                Search service
                            </h6>
                            <button className="btn btn-sm float-end rotate-obj" data-bs-toggle="collapse" data-bs-target="#filters">
                                <span className="fa fa-angle-up"></span>
                            </button>
                        </div>
                        <div className="card-body collapse show" id="filters">
                            <div className="input-group input-group-sm mb-2">
                                <label className="input-group-text bg-white">Category:</label>
                                <select className="form-select border-start-0 text-end">
                                    <option></option>
                                </select>
                            </div>
                            <div className="input-group input-group-sm mb-2">
                                <label className="input-group-text bg-white">Type:</label>
                                <select className="form-select border-start-0 text-end">
                                    <option></option>
                                </select>
                            </div>
                            <h6 className="mt-3 mb-2 text-secondary border-top pt-2">
                                Service details:
                            </h6>
                            <div className="input-group input-group-sm mb-2 ps-3 small">                                
                                <label className="form-check-label text-secondary">
                                    <input type="checkbox" className="form-check-control"/>
                                    Remote service
                                </label>    
                            </div>   
                            <div className="input-group input-group-sm mb-2 ps-3 small">                                
                                <label className="form-check-label text-secondary">
                                    <input type="checkbox" className="form-check-control"/>
                                    With delivery
                                </label>    
                            </div>        
                            <div className="input-group input-group-sm mb-2 ps-3 small">                                
                                <label className="form-check-label text-secondary">
                                    <input type="checkbox" className="form-check-control"/>
                                    In customer's place
                                </label>    
                            </div>  
                            <div className="mx-2 text-end border-top pt-2">
                                <button className="btn btn-sm btn-secondary rounded-pill">Search</button>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8 col-lg-9">
                    <div className="card mb-3 shadow bg-white">
                        <div className="row m-0">
                            <div className="col-lg-4 d-none d-lg-block px-0 bg-secondary">
                                <img className="h-100 w-100" src="" alt=""/>
                            </div>
                            <div className="col-12 col-lg-8 px-0">
                                <table className="table table-borderless mb-0">
                                    <thead>
                                        <tr className="border-bottom text-secondary text-center">
                                            <th>Names</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-center text-secondary small">
                                            <td>XXX</td>
                                            <td>DDDDDDDDDD</td>
                                            <td>$ 0.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>     
    );
}

export default ServicesS2;