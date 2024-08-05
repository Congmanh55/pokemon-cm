var links = [
    "https://einvoice.fast.com.vn/index.aspx?type=3&c=AQAAAHpJD2E/9cCWQB+qtya/T7YWnqKBOjfL82rXLWUjRNO66W3g+MyMgO8=001683&hash=C6530BB022D70ED848C7B416C336586F",
    "https://einvoice.fast.com.vn/index.aspx?type=3&c=AQAAAKnj4k7beNawxdFuwrSBpu7jTjmwO4cE7yPwvDHVw867GrMxeW7ad+M=008934&hash=596F41052DE67464730AB7698D82D275",
  ];
  
  async function downloadAll(urls) {
    const totalFiles = urls.length;
    let downloadedFiles = 0;
  
    for (const url of urls) {
      await downloadFile(url);
      downloadedFiles++;
      console.log(`Downloaded ${downloadedFiles} of ${totalFiles} files`);
    }
  
    console.log("All files downloaded successfully");
  }
  
  function downloadFile(url) {
    return new Promise((resolve) => {
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("target", "_blank");
  
      link.setAttribute("download", "");
      link.style.display = "none";
  
      document.body.appendChild(link);
  
      link.click();
  
      // Remove the link after a short delay
      setTimeout(() => {
        document.body.removeChild(link);
        resolve();
      }, 1500); // Increased delay to 1 second
    });
  }
  
  // Make downloadAll available globally
  window.downloadAll = downloadAll;


            // Add an event listener to handle changes in the input
            document.getElementById('myInput').addEventListener('input', function(event) {
              console.log(event.target.value); // Optional: Do something with the input value
            });
        
            // You can also add a button to clear the input manually, if needed
            document.getElementById('clearButton').addEventListener('click', function() {
              document.getElementById('myInput').value = ''; // Clear the input
            });