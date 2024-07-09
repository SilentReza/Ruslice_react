// component
import HeaderHome from "../../component/pages/home/page/home";

const Error = () => {
    return (
        <>
            <HeaderHome/>
            <section id="error">
                {/* 404 content */}
                <div className="container h-100">
                    {/* start row */}
                    <div className="row justify-content-center align-items-center h-100">
                        {/* collation */}
                        <div className="col-md-5 mt-5">
                            {/* start card */}
                            <div className="card worker-card card-body border-0">
                                {/* error video */}
                                <div className="error-video">
                                    <img alt="error" src={require('./../../global/image/client/404.png')}
                                         className="img-fluid animated-img"/>
                                </div>
                                {/* end error video */}
                                {/* error body */}
                                <div className="error-body">
                                    <h5 className="card-text fw-bold text-center">صفحه مد نظر پیدا نشد</h5>
                                </div>
                                {/* end error body */}
                            </div>
                            {/* end card */}
                        </div>
                        {/* end collation */}
                    </div>
                    {/* end row */}
                </div>
                {/* end 404 content */}
            </section>
        </>
    )
}

export default Error