import "./style.css";


function Gallery(){
    return <div style={{overflow:"hidden"}}>
    <ThreeModelViewer />
    <div className="bike-main-container">
      <div className="gallery">
        <h1 style={{ textAlign: "center", fontSize: "4rem" }}>Gallery</h1>
      </div>
      <div className="bike--container">
        <div className="image--container">
          <img src="bikeJPG.jpg" width={400} />
          <table>
            <tbody className="table--body">
              <tr>
                <td className="td">Format</td>
                <td className="colon">:</td>
                <td className="data">JPG</td>
              </tr>
              <tr>
                <td className="td">Size</td>
                <td className="colon">:</td>
                <td className="data">637 KB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="image--container">
          <img src="bikePNG.png" width={400} />
          <table>
            <tbody className="table--body">
              <tr>
                <td className="td">Format</td>
                <td className="colon">:</td>
                <td className="data">PNG</td>
              </tr>
              <tr>
                <td className="td">Size</td>
                <td className="colon">:</td>
                <td className="data">2287 KB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="image--container">
          <img src="bikeWEBP.webp" width={400} />
          <table>
            <tbody className="table--body">
              <tr>
                <td className="td">Format</td>
                <td className="colon">:</td>
                <td className="data">WEBP</td>
              </tr>
              <tr>
                <td className="td">Size</td>
                <td className="colon">:</td>
                <td className="data">1060 KB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}

export default Gallery;