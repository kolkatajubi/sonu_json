$(document).ready(() => {
  $("#submit").click(async () => {
    var username1 = $("#name").val();
    var email1 = $("#email").val();
    var mobile1 = $("#mobile").val();
    var salary1 = $("#salary").val();
    console.log("entered in var storing");
    jQuery.ajax({
      url: "http://127.0.0.1:3000/requestjson",
      type: "POST",
      data: {
        username: username1,
        email: email1,
        mobile: mobile1,
        salary: salary1
      },
      dataType: "json"
    });
  });
});
