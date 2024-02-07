

$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    let url = $("#url").val();
    let size = $("#size").val();
    let color = $("#color").val().substring(1); // Remove the #
    let background = $("#background").val().substring(1); // Remove the #

    $("#qrcode").empty(); // Clear the previous QR code

    new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: size,
      height: size,
      colorDark: color,
      colorLight: background,
    });
  });
});
