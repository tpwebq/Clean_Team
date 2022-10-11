import {Link} from "react-router-dom";


function IndexS1(){
    return(        
        <section className="index-s1 min-vh-100 container-fluid d-flex align-items-center py-5">
            <div className="row w-100 mx-0">
                <div className="col-12 col-md-7 minh-50vh"></div>
                <div className="col-10 col-md-5 mx-auto d-flex align-items-center">
                    <div className="text-center text-md-start">
                        <img className="navbar-logo" src="img/navbar_logo.png" alt="logo"/>
                        <h1 className="display-3">Lorem ipsum</h1>
                        <p className="">
                            Fusce suscipit, neque vel tincidunt sollicitudin, libero magna laoreet massa, 
                            eu pretium leo eros at mauris. Phasellus a lacus ipsum. Maecenas dapibus nisi 
                            ac fringilla pretium.
                        </p>
                        <div className="w-100 text-center text-md-start mt-2">
                            <Link to="/services" className="btn btn-secondary rounded-pill">
                                See more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default IndexS1;