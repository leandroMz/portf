window.addEventListener("load", function () {

  $('.hambur').click(function () {
    $('.mn-dsktop, .close-nav').show();
    $('.hambur').hide();
    $('.mn-dsktop').css({ 'transform': 'translateX(0)' });
  });

  $('.close-nav').click(function () {
    $('.mn-dsktop, .close-nav').hide();
    $('.hambur').show();
    $('.mn-dsktop').css({ 'transform': 'translateX(100%)' });
  });

  $.getJSON("js/lang.json", function (json) {
    $('.translate').click(function () {
      $('.flag').removeClass('selected');
      $(this).addClass('selected');

      localStorage.setItem("lang", $(this).attr('id'));
      var lang = $(this).attr('id');
      var doc = json;
      $('.lang').each(function (index, element) {
        $(this).text(doc[lang][$(this).attr('key')]);
      });
    });

    $('#en').click();
  });

  const renderProject = project => {
    return `
    <div class="box-p" data-aos="${project.dataAos}">
      <div class="img-project">
        <img class="img-pjct" src="${project.imgSrc}">
      </div>
      <div class="title-projects">
        <h2 class="lang" key="${project.titleKey}">${project.title}</h2>
        <a href="${project.diamondLink}" target="_blank">
          <i class="fa-solid fa-diamond-turn-right iconRedes"></i>
        </a>
        <a href="${project.githubLink}" target="_blank">
          <i class="fa-brands fa-github iconRedes"></i>
        </a>
      </div>
      <div class="description-projects">
        <ul>
          ${project.technologies.map(tech => `<li class="techLyst">${tech}</li>`).join('')}
        </ul>
        <p class="parr-projects lang" key="${project.descriptionKey}">${project.description}</p>
      </div>
    </div>
    `;
  };

  const projects = [
    {
      dataAos: "fade-right",
      imgSrc: './images/1.png',
      titleKey: 'text9',
      title: '',
      diamondLink: 'http://www.jechcapital.com',
      githubLink: 'https://github.com/leandroMz?tab=repositories',
      technologies: ['Html/Css/Js', 'API', 'Form', 'librarys'],
      descriptionKey: 'text10',
      description: ''
    },
    {
      dataAos: "fade-left",
      imgSrc: './images/4.png',
      titleKey: 'text11',
      title: '',
      diamondLink: 'http://www.ecomerce-coder.netlify.app',
      githubLink: 'https://github.com/leandroMz/PreEntrega1Martinez',
      technologies: ['REACT', 'Firebase', 'Auth', 'Html/Css/Js'],
      descriptionKey: 'text12',
      description: ''
    },
    {
      dataAos: "fade-right",
      imgSrc: './images/6.png',
      titleKey: 'text13',
      title: '',
      diamondLink: 'https://clinicadental-dh.netlify.app/',
      githubLink: 'https://github.com/leandroMz/ClinicaDental_MartinezLeandro',
      technologies: ['JAVA', 'Spring', 'SQL', 'Login', 'Html/Css/Js'],
      descriptionKey: 'text14',
      description: ''
    },
    {
      dataAos: "fade-left",
      imgSrc: './images/3.png',
      titleKey: 'text15',
      title: '',
      diamondLink: 'https://hthydsawqerew.netlify.app',
      githubLink: 'https://github.com/leandroMz/Fogop-Web23',
      technologies: ['Html/Css/Js', 'API', 'librarys', 'Netlify'],
      descriptionKey: 'text16',
      description: ''
    },
    {
      dataAos: "fade-right",
      imgSrc: './images/5.png',
      titleKey: 'text17',
      title: '',
      diamondLink: 'https://lovely-boba-001561.netlify.app',
      githubLink: 'https://github.com/leandroMz/RockPaperOrScissors',
      technologies: ['HTML', 'CSS', 'JS', 'Netlify'],
      descriptionKey: 'text18',
      description: ''
    }, {
      dataAos: "fade-left",
      imgSrc: './images/2.png',
      titleKey: 'text19',
      title: '',
      diamondLink: 'https://splendid-baklava-0c90d9.netlify.app/',
      githubLink: 'https://github.com/leandroMz/ChallengeResponsiveFullPage',
      technologies: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Netlify'],
      descriptionKey: 'text20',
      description: ''
    }
  ];
  const $app = document.getElementById("proyectos-box");
  let html = "";
  for (const project of projects) {
    html += renderProject(project);
  }
  $app.innerHTML = html;

  // FORMULARIO
  let forms = document.querySelector("form.reservation");
  forms.addEventListener("submit", function (e) {
    let errores = [];
    let nameForm = document.querySelector("input.form-name")
    let emailForm = document.querySelector("input.form-email")
    let messageForm = document.querySelector("textarea.form-message")
    let acc = 0;
    if (nameForm.value == "") {
      errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text112">Name: (please fill in this field)</a></i>')
      nameForm.setAttribute("style", "border-color: red;")
      acc += 0
    } else if (nameForm.value.length < 3) {
      errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text113">Name: (please minimum three characters)</a></i>')
      nameForm.setAttribute("style", "border-color: red;")
      acc += 0
    } else if (soloLetras(nameForm.value) === false) {
      errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text114">Name: (please only letters allowed)</a></i>')
      nameForm.setAttribute("style", "border-color: red;")
      acc += 0
    } else {
      errores.push('<i class="material-icons">check_circle<a class="errores-push lang" key="text115">Name Valid</a></i>')
      nameForm.setAttribute("style", "border-color:green;")
      acc += 1
    }
    if (emailForm.value == "") {
      errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text116">Email: (please fill in this field)</a></i>')
      emailForm.setAttribute("style", "border-color: red;")

      acc += 0
    } else if (!validar_email(emailForm)) {
      errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text117">Email: (please enter a valid email)</a></i>')
      emailForm.setAttribute("style", "border-color: red;")
      acc += 0
    } else {
      errores.push('<i class="material-icons">check_circle<a class="errores-push lang" key="text118">Email Valid</a></i>')
      emailForm.setAttribute("style", "border-color: green;")
      acc += 1
    }
    if (messageForm.value == "") {
      errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text119">Message: (please fill in this field)</a></i>')
      messageForm.setAttribute("style", "border-color: red;")
      acc += 0
    } else {
      errores.push('<i class="material-icons">check_circle<a class="errores-push lang" key="text120">Message Valid</a></i>')
      messageForm.setAttribute("style", "border-color: green;")
      acc += 1
    }
    borrarErrores()
    if (acc < 3) {
      e.preventDefault()
      let ulErrores = document.querySelector("div.errores ul")
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
      }
    } else {
      swal({
        title: "Thanks!",
        text: "Your email has been sent!",
        icon: "success",
        button: "ok",
        timer: 4000
      });
    }
  })
});
let ele = document.getElementById('parent');
function borrarErrores() {
  while (ele.lastChild) {
    ele.lastChild.remove();
  }
}
let expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let reg = /^[a-zA-ZÀ-ÿ ]+$/;
function validar_email(email) {
  return (expReg.test(email.value)) ? true : false;
}
function soloLetras(str) {
  return (reg.test(str)) ? true : false;
}