import React from "react";

function Footer() {
  return (
    <div className="footer mt-5">
      <footer class="bg-dark d-flex flex-column align-items-center">
        <div class="p-0 text-align-center">
          <ul class="socialIcons p-0 d-flex flex-row justify-content-between">
            <li>
              <a
                href="https://github.com/Cameron-Porter"
                target="_blank"
                rel="noreferrer"
                name="Github"
                tabindex="0"
                alt="Github Icon"
              >
                <i class="ri-github-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/🚴-cameron-porter-b59387197/"
                target="_blank"
                rel="noreferrer"
                name="LinkedIn"
                tabindex="0"
                alt="Linkedin Icon"
              >
                <i class="ri-linkedin-box-line"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="">
          <p class="text-center text-white">Copyright &copy; Porter 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
