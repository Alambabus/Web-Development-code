  const URL = 'http://facebook.com/user/profile.jpg';
  //1----------------------------------------------------------------->
  //   function downloadFile(path) {
  //       console.log('Started to download the file', path);
  //       setTimeout(() => {
  //           console.log('File Downloaded Successfully!');
  //       }, 3000)
  //   }

  //   downloadFile(URL);


  //2---------------------------------------------------------------->

  function downloadFile(path, downloaded) {
      console.log('Starting to download the file', path);
      setTimeout(() => {
          downloaded(path.split('/').pop());
      }, 3000)
  }

  function compressFile(fileName, compresed) {
      console.log('Starting to compress the file', fileName);
      setTimeout(() => {
          compresed(fileName.replace('jpg', 'zip'));
      }, 2000)
  }

  function uploadFile(compressFileName, uploaded) {
      console.log('Startining to upload the file', compressFileName);
      setTimeout(() => {
          uploaded('http://facebook.cloud/' + compressFileName);
      }, 3000)
  }

  //callbacj hell (before ES6)
  //Instead of this we use promise

  downloadFile(URL, function(fileName) {
      console.log('File Downloaded Successfully as', fileName);
      compressFile(fileName, function(compressFileName) {
          console.log('File Compresed Successfully as', compressFileName);
          uploadFile(compressFileName, function(uploadedPath) {
              console.log('File Uploaded successfuly at path', uploadedPath);
          })
      })
  });