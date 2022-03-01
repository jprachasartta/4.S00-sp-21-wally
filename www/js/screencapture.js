function capture () {
  html2canvas(document.body).then((canvas) => {
    let a = document.createElement("a");
    a.download = "wally.png";
    a.href = canvas.toDataURL("image/png");
    a.click(); 
  });
}




// document.querySelector('button').addEventListener('click', function() {
//   html2canvas(document.querySelector('.specific'), {
//       onrendered: function(canvas) {
//           // document.body.appendChild(canvas);
//         return Canvas2Image.saveAsPNG(canvas);
//       }
//   });
// });


