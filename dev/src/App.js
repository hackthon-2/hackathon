import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import ReactCrop from "react-image-crop";
import {
  base64StringtoFile,
  downloadBase64File,
  extractImageFileExtensionFromBase64,
  image64toCanvasRef,
} from "./ResuableUtils";
import "./custom-image-crop.css";

import Login from "./views/Login";
import Nav from "./components/Nav";
import Diary from "./views/Diary";
// https://os.ncuos.com/api/user/token
// https://os.ncuos.com/api/user/profile/basic
export default function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Diary Link={Link} Nav={Nav} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function About() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    background: papayawhip;
  `;
  const Description = styled.p`
    font-size: 15px;
    color: blue;
    text-align: center;
  `;

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <Description>ajksghdaksjgvfjkasg</Description>
      <Nav Link={Link} />
    </Wrapper>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
      <Nav Link={Link} />
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

function Upload() {
  const imageMaxSize = 1000000000; // bytes
  const acceptedFileTypes =
    "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
  const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
    return item.trim();
  });
  let fileInputRef = React.createRef();
  let imagePreviewCanvasRef = React.createRef();
  let [imgSrc, setimgSrc] = useState(null);
  let [imgSrcExt, setimgSrcExt] = useState(null);
  let [crop, setcrop] = useState({
    unit: "%",
    width: 50,
    height: 50,
    x: 25,
    y: 25,
    aspect: 1 / 1,
  });

  const verifyFile = (files) => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        alert(
          "This file is not allowed. " + currentFileSize + " bytes is too large"
        );
        return false;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        alert("This file is not allowed. Only images are allowed.");
        return false;
      }
      return true;
    }
  };

  const handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = verifyFile(files);
      if (isVerified) {
        // imageBase64Data
        const currentFile = files[0];
        const myFileItemReader = new FileReader();
        myFileItemReader.addEventListener(
          "load",
          () => {
            // console.log(myFileItemReader.result)
            const myResult = myFileItemReader.result;
            setimgSrc(myResult);
            setimgSrcExt(extractImageFileExtensionFromBase64(myResult));
            // setState({
            //   imgSrc: myResult,
            //   imgSrcExt: extractImageFileExtensionFromBase64(myResult),
            // });
          },
          false
        );

        myFileItemReader.readAsDataURL(currentFile);
      }
    }
  };

  const handleOnCropChange = (crop) => {
    console.log(crop);
    setcrop(crop);
  };
  //预览部分
  const handleOnCropComplete = (crop, pixelCrop) => {
    // pixelCrop.x=crop.x;
    // pixelCrop.y=crop.y;
    const canvasRef = imagePreviewCanvasRef.current;
    image64toCanvasRef(canvasRef, imgSrc, pixelCrop, crop);
  };
  const handleDownloadClick = (event) => {
    event.preventDefault();
    if (imgSrc) {
      const canvasRef = imagePreviewCanvasRef.current;

      const imageData64 = canvasRef.toDataURL("image/" + imgSrcExt);

      const myFilename = "previewFile." + imgSrcExt;

      // file to be uploaded
      const myNewCroppedFile = base64StringtoFile(imageData64, myFilename);
      console.log(myNewCroppedFile);
      // download file
      downloadBase64File(imageData64, myFilename);
      handleClearToDefault();
    }
  };

  const handleClearToDefault = (event) => {
    if (event) event.preventDefault();
    const canvas = imagePreviewCanvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    setimgSrcExt(null);
    setimgSrc(null);
    setcrop({ unit: "%", width: 50, height: 50 });
    fileInputRef.current.value = null;
  };

  const handleFileSelect = (event) => {
    // console.log(event)
    const files = event.target.files;
    if (files && files.length > 0) {
      const isVerified = verifyFile(files);
      if (isVerified) {
        // imageBase64Data
        const currentFile = files[0];
        const myFileItemReader = new FileReader();
        myFileItemReader.addEventListener(
          "load",
          () => {
            // console.log(myFileItemReader.result)
            const myResult = myFileItemReader.result;
            console.log(myResult);
            setimgSrc(myResult);
            setimgSrcExt(extractImageFileExtensionFromBase64(myResult));
            // setState({
            //   imgSrc: myResult,
            //   imgSrcExt: extractImageFileExtensionFromBase64(myResult),
            // });
          },
          false
        );

        myFileItemReader.readAsDataURL(currentFile);
      }
    }
  };
  const handleImgLoaded = (img) => {
    const aspect = 1 / 1;
    const width = img.width < img.height ? 100 : (img.height / img.width) * 100;
    const height =
      img.width > img.height ? 100 : (img.width / img.height) * 100;
    const y = (100 - height) / 2;
    const x = (100 - width) / 2;
    setcrop({ unit: "%", width, height, x, y, aspect });
  };
  // let CROPPER;
  // const Inputimg = styled.input`
  //   display: none;
  // `;
  // const Imgsize = styled.img`
  //   height: 300px;
  //   width: 300px;
  // `;
  // const PreviewBox = styled.div`
  //   box-shadow: 0 0 5px #adadad;
  //   width: 100px;
  //   height: 100px;
  //   margin-top: 30px;
  //   overflow: hidden;
  // `;
  // const loadingImg = (eve) => {
  //   let reader = new FileReader();
  //   if (eve.target.files[0]) {
  //     reader.readAsDataURL(eve.target.files[0]);
  //     reader.onload = (e) => {
  //       let dataURL = reader.result;
  //       document.querySelector("#cropImg").src = dataURL;
  //       const image = document.getElementById("cropImg");
  //       CROPPER = new Cropper(image, {
  //         aspectRatio: 16 / 16,
  //         viewMode: 2,
  //         minContainerWidth: 300,
  //         minContainerHeight: 300,
  //         dragMode: "move",
  //         background: false,
  //         autoCropArea:1,
  //         preview: [
  //           document.querySelector(".previewBox"),
  //           document.querySelector(".previewBoxRound"),
  //         ],
  //         setCropBoxData:{
  //           width:500,
  //           height:500
  //         }
  //       });
  //     };
  //   }
  // };
  // const uploadImg = () => {
  //   document.querySelector("#imgReader").click();
  //   if (CROPPER) {
  //     CROPPER.destroy();
  //   }
  // };

  // const cropperRef = useRef<HTMLImageElement>();
  // const onCrop = () => {
  //   const imageElement = cropperRef?.current;
  //   const cropper = imageElement?.cropper;
  //   console.log(cropper.getCroppedCanvas().toDataURL());
  // };
  return (
    <div className="upload-box">
      <h1>Drop and Crop</h1>
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedFileTypes}
        multiple={false}
        onChange={handleFileSelect}
      />
      <div>
        <ReactCrop
          src={imgSrc}
          crop={crop}
          onComplete={handleOnCropComplete}
          onChange={handleOnCropChange}
          onImageLoaded={handleImgLoaded}
        />

        <br />
        <p>Preview Canvas Crop </p>
        <canvas
          ref={imagePreviewCanvasRef}
          style={{ borderRadius: "50%" }}
        ></canvas>
        <button onClick={handleDownloadClick}>Download</button>
        <button onClick={handleClearToDefault}>Clear</button>
      </div>
      {/* <Cropper
        style={{ height: 800, width: "50%" }}
        initialAspectRatio={1 / 1}
        guides={false}
        // crop={onCrop}
        // ref={cropperRef}
        /> */}

      {/* <Inputimg
          type="file"
          accept="image/*"
          id="imgReader"
          onChange={loadingImg}
        />
        <Imgsize id="cropImg"></Imgsize>
        <div>裁剪预览</div>
        <PreviewBox className="previewBox"></PreviewBox>
        <div className="previewBoxRound"></div>
        <button onClick={uploadImg}>上传</button> */}
      <Nav Link={Link} />
    </div>
  );
}
