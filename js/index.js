function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").classList.add("noTransparrent");
  }
  else {
    document.getElementById("navbar").classList.remove("noTransparrent");
  }
}

window.onscroll = function() {
  scrollFunction();
}

window.onload = function() {

  // عداد المواقع الالكترونية
  let website = new CountUp('website-count', 0, 324, 0, 2.5);
  website.start();

  // عداد صفحات الهبوبط
  let landing = new CountUp('landing-page-count', 0, 500, 0, 3);
  landing.start();

  // عداد المستخدمين
  let users = new CountUp('users-count', 0, 5000, 0, 4);
  users.start();

  // عداد الفديوهات
  let videos = new CountUp('videos-count', 0, 100, 0, 2);
  videos.start();
};


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();


// جميع الحقوق محفوظة 
document.getElementById("fullYear").innerHTML = new Date().getFullYear();