import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import {
  base64StringtoFile,
  downloadBase64File,
  extractImageFileExtensionFromBase64,
  image64toCanvasRef,
} from "../../ResuableUtils";
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
            const myResult = myFileItemReader.result;
            setimgSrc(myResult);
            setimgSrcExt(extractImageFileExtensionFromBase64(myResult));

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
    </div>
  );
}

export default Upload;
