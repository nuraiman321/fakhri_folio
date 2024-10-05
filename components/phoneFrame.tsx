export default function PhoneFrame() {
  return (
    <>
      <div className="container">
        {/* <h1 className="text-center">Mobile Devices in Pure CSS</h1> */}
        <div className="row">
          <div className="col-md-6">
            <h2>Smartphone portrait</h2>

            {/* <!-- smartphone --> */}
            <div className="smartphone-portrait">
              <div className="smartphone-screen">
                <div className="camera"></div>
                <img src="//placehold.it/800x1200" className="img-responsive" />
              </div>
            </div>
          </div>
          {/* <div className="col-md-6">
            
            <h2>Smartphone landscape</h2>
            
            <div className="smartphone-landscape">
                <img src="//placehold.it/1100x600" className="img-responsive" /> 
            </div>

        </div> */}
        </div>
        {/* <div className="row">
        <div className="col-md-8 col-md-offset-2">
            <h2>Tablet portrait</h2>
            
            <div className="tablet-portrait">
                <img src="//placehold.it/800x1000" className="img-responsive" /> 
            </div>

        </div>
        <div className="col-md-10 col-md-offset-1">
            
            <h2>Tablet landscape</h2>
            
            <div className="tablet-landscape">
                <img src="//placehold.it/1200x800" className="img-responsive" /> 
            </div>

            
        </div>
    </div> */}
      </div>
    </>
  );
}
